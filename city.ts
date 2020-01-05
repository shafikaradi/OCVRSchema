interface City{
    id:ObjectID,
    name:String,
    descriptionString,
    status:Boolean,
    createdBy:ObjectID,
    createdAt:DateTime,
    modifiedBy:ObjectID,
    modifiedAt:DateTime,
    countryId:ObjectID,
    centers:[
        {
            id:ObjectID,
            name:String,
            descriptionString,
            status:Boolean,
            createdBy:ObjectID,
            createdAt:DateTime,
            modifiedBy:ObjectID,
            modifiedAt:DateTime,
        }
    ]

}