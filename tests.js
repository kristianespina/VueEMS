mutation {
    login(email: "onelespina@gmail.com", password: "123456")
}


query {
    getUsers {
        email
    }
}

{
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJpZCI6IjVjMmRkYjE5ZWU4OTI5M2QwMGE0ZWFkZiIsImVtYWlsIjoib25lbGVzcGluYUBnbWFpbC5jb20ifSwiaWF0IjoxNTQ2NTA5ODA1LCJleHAiOjE1NDY1OTYyMDV9.HfK4SL5oKVwtUM16QS2a-DYHTqxxUx-3j2i6yrjmzSM"
}