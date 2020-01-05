
interface Admin{
    id:ObjectID,
    fullName:String,
    email:String,
    birthDate:Date,
    gender:String,
    userType:String,
    passwordHash:String,
    photo:String,
    lastLoginAt:DateTime,
    loginTryAttempts:Number,
    status:Number,
    createdBy:ObjectID,
    createdAt:DateTime,
    modifiedBy:ObjectID,
    modifiedAt:DateTime
}