
const userPage = (req, res) => {
    console.log(`Logged in user: ${JSON.stringify(req.user, null, 4)}`);
    res.status(200).render("user", {
        title: "User Content"
    })
}

const adminPage = (req, res) => {
    console.log(`Logged in user: ${JSON.stringify(req.user, null, 4)}`);
    res.status(200).render("admin", {
        title: "Admin Content"})
}
  
export default { userPage, adminPage }