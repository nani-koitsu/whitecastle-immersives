export const userData = (req, res) => {
    res.status(200).json({ data: req.user })
}
