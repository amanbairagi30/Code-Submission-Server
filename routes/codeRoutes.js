const router = require('express').Router();
const prisma = require('../config/dbconfig');

router.post("/submit" , async(req,res)=>{
    const { username, codeLanguage, stdin, sourceCode } = req.body;
    try {
        const codeSnippet = await prisma.code.create({
            data: {
                username,
                codeLanguage,
                stdin,
                sourceCode,
            },
        });
        res.json({success : true ,message : `${username} , your submission has been recorded successfully`, codeSnippet});
    } catch (error) {
        console.error('Error submitting code snippet:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router