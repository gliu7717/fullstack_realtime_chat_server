import * as admin from 'firebase-admin';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        req.user = user;
        res.set('Access-Control-Allow-Origin', '*');
        next();
    } catch (e) {
        res.status(401).json({ message: "You must be logged in to access these resources" });
    }
};
