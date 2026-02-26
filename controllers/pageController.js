
const userPage = (req, res) => {
    res.status(200).render("user", {
        title: "User Content"
    })
}

const adminPage = (req, res) => {
    res.status(200).render("admin", {
        title: "Admin Content"})
}

export default { userPage, adminPage }