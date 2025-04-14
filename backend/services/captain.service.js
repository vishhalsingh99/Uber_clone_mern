const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname, lastname, email, password,
    color, vehicleType, capacity, plate
}) => {
    if (!firstname || !email || !password || !color || !vehicleType || !capacity || !plate) {
        throw new Error("All fields are required");
    }

    // Ensure the created captain is returned
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType: vehicleType // Ensure it matches the schema field name
        }
    });

    return captain; // Return the newly created captain
};
