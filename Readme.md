# Project Name : Random User Api

## API Live Link : [ https://node-mongo-acc.herokuapp.com/](https://node-mongo-acc.herokuapp.com/)


---

### GET API for a Random User: [https://node-mongo-acc.herokuapp.com/api/v1/user/random](https://node-mongo-acc.herokuapp.com/api/v1/user/random)

---

### GET API for All Users : [ https://node-mongo-acc.herokuapp.com/api/v1/user/all]( https://node-mongo-acc.herokuapp.com/api/v1/user/all)


---

### GET API for All Users with limit as Query String : [ https://node-mongo-acc.herokuapp.com/api/v1/user/all?limit=5]( https://node-mongo-acc.herokuapp.com/api/v1/user/all?limit=5)

*The value for limit is variable*


---
### POST API for Creating a User : [ https://node-mongo-acc.herokuapp.com/api/v1/user/save]( https://node-mongo-acc.herokuapp.com/api/v1/user/save)

*The body for Creating a new user will be like:*
`{
    "name": "Samin Ravi",
    "gender" : "Male",
    "address": "Dhaka",
    "contact" : 01234567891,
    "photoURL" : "https://i.picsum.photos/id/316/200/300.jpg?hmac=sq0VBO6H0wGg9Prod7MVUUB_7B91kmD5E1X1TRSo66U"
}`

- The Name, Gender, Address and photoURL must be a string and its length must be greater than 0.
- The contact must be a number and its must be of 11 digits.
- The Gender must be selected between Male/Female/Other. Uppercase/Lowercase won't matter
- No need to provide any id because it will be automatically generated during a successful POST API call


---

### PATCH API for Updating a User with selected ID : [ https://node-mongo-acc.herokuapp.com/api/v1/user/update]( https://node-mongo-acc.herokuapp.com/api/v1/user/update)

*The body for updating a existing user will be like:*
`{
    "_id" : "nQZYD",
    "name": "Samin Ravi",
    "gender" : "Male",
    "address": "Dhaka",
    "contact" : 01234567891,
    "photoURL" : "https://i.picsum.photos/id/316/200/300.jpg?hmac=sq0VBO6H0wGg9Prod7MVUUB_7B91kmD5E1X1TRSo66U"
}`

- ID must be provided in the body and it should be like _id
- ID can be taken from  this API of getting ALL users [ https://node-mongo-acc.herokuapp.com/api/v1/user/all]( https://node-mongo-acc.herokuapp.com/api/v1/user/all) 
- Along with ID any other Keys among name, gender, address, contact, photoURL can be given. But at least one key must be provided along with ID to update a user
- The validations for name, gender, address, contact, photoURL is same as POST API. 

---

### PATCH API for Bulk Updating Multiple Users with selected IDs : [ https://node-mongo-acc.herokuapp.com/api/v1/user/bulk-update]( https://node-mongo-acc.herokuapp.com/v1/user/bulk-update)

*The body for Bulk Updating multiple users will be like:*
`[
    {
    "_id" : "nQZYD",
    "name": "Samin Ravi",
    "gender" : "Male",
    "address": "Dhaka",
    "contact" : 01234567891,
    "photoURL" : "https://i.picsum.photos/id/316/200/300.jpg?hmac=sq0VBO6H0wGg9Prod7MVUUB_7B91kmD5E1X1TRSo66U"
},
{
    "_id" : "notjK",
    "name": "Mir Hussain",
    "gender" : "Male",
    "address": "Dhaka",
    "contact" : 01234567891,
    "photoURL" : "https://i.picsum.photos/id/316/200/300.jpg?hmac=sq0VBO6H0wGg9Prod7MVUUB_7B91kmD5E1X1TRSo66U"
}
]`

- More than 1 Object must given within an Array in the body
- IDs of each Object must be provided and it should be like _id
- IDs of each Object must be unique
- IDs can be taken from  this API of getting ALL users [ https://node-mongo-acc.herokuapp.com/api/v1/user/all]( https://node-mongo-acc.herokuapp.com/api/v1/user/all)
- Within each Object the validations for name, gender, address, contact, photoURL is same as POST API. 
- Within each Object at least one key must be provided along with ID to update the user



---

### DELETE API for deleting an User with selected ID : [ https://node-mongo-acc.herokuapp.com/api/v1/user/update]( https://node-mongo-acc.herokuapp.com/api/v1/user/delete)

*The body for deleting an existing user will be like:*
`{
    "_id" : "nQZYD"
}`

- ID must be provided in the body and it should be like _id
- ID can be taken from  this API of getting ALL users [ https://node-mongo-acc.herokuapp.com/api/v1/user/all]( https://node-mongo-acc.herokuapp.com/api/v1/user/all) 
- No need to provide any other key like name, gender, contact, address, photoURL. Only ID is required to delete a user
---