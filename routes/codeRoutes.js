const router = require('express').Router();
const prisma = require('../config/dbconfig');

router.post("/submit", async (req, res) => {
    const { username, codeLanguage, stdin, sourceCode , stdout } = req.body;
    try {
        const codeSnippet = await prisma.code.create({
            data: {
                username,
                codeLanguage,
                stdin,
                sourceCode,
                stdout
            },
        });
        res.status(200).json({ success: true, message: `${username} , your submission has been recorded successfully`, codeSnippet });
    } catch (error) {
        console.error('Error submitting code snippet:', error);
        res.status(500).json({  success : false , error: 'Internal server error' });
    }
})
router.get("/get-submissions", async (req, res) => {
    try {
        const allCodeData = await prisma.code.findMany();

        res.status(200).json({ success: true, message: `Data fetched successfully`, allCodeData });
    } catch (error) {
        console.error('Error submitting code snippet:', error);
        res.status(500).json({ success : false ,error: 'Internal server error' });
    } finally {
        await prisma.$disconnect();
    }
})

module.exports = router