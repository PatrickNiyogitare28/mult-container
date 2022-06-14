db.createUser(
  {
    user: "root",
    pwd: "root@123",
    roles: [
      {
        role: "readWrite",
        db: "multicontainer-database"
      }
    ]
  }
)