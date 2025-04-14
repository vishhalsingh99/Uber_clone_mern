/**
 * Registers a new user.
 * Validates the request body, hashes the password, creates a new user, and generates an authentication token.
 * 
 * @async
 * @function registerUser
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body containing user details.
 * @param {Object} req.body.fullname - Full name of the user (contains firstname and lastname).
 * @param {string} req.body.email - Email of the user.
 * @param {string} req.body.password - Password of the user.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} JSON response containing the authentication token and user details.
 */

/**
 * Logs in an existing user.
 * Validates the request body, checks user credentials, and generates an authentication token.
 * 
 * @async
 * @function loginUser
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body containing login credentials.
 * @param {string} req.body.email - Email of the user.
 * @param {string} req.body.password - Password of the user.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} JSON response containing the authentication token and user details.
 */

/**
 * Retrieves the profile of the currently authenticated user.
 * 
 * @async
 * @function getUserProfile
 * @param {Object} req - Express request object.
 * @param {Object} req.user - User object attached by the authentication middleware.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} JSON response containing the user profile.
 */

/**
 * Logs out the currently authenticated user.
 * Clears the authentication token cookie and blacklists the token.
 * 
 * @async
 * @function logoutUser
 * @param {Object} req - Express request object.
 * @param {Object} req.cookies - Cookies attached to the request.
 * @param {Object} req.headers - Headers attached to the request.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} JSON response confirming successful logout.
 */