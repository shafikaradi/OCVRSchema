interface Citizen{
    id:ObjectID,
    email:String,
    birthDate:Date,
    gender:String,
    status:Boolean,
    passwordHash:String,
    lastLoginAt: DateTime,
    createdAt:DateTime,
    modifiedAt:DateTime,
    countryID:ObjectID,
}

