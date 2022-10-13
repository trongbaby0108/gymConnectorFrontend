import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "Bạn chưa xác nhận thông tin !"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token không tồn tại!"));
        req.user = user;
        next()
    });
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            if (err) return next(createError(403, "You are not authorized!"));
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            if (err) return next(createError(403, "You are not authorized!"));
        }
    })
}

