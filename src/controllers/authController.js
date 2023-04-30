import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { db } from '../database/database.js'


export async function signin(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection('users').findOne({ email });

        if (!user) return res.status(404).send('usuario nao encontrado');

        if (bcrypt.compareSync(password, user.password)) {
            const token = uuid();

            await db.collection('sessions').insertOne({ userId: user._id, token });

            res.status(200).send(token);

        } else {
            res.status(401).send('senha incorreta');
        }
    } catch (error) {
        res.status(401).send(error);
    }
}


export async function signup(req, res) {
    const {name, email, userName, password} = req.body;

    const passwordHash = bcrypt.hashSync(password, 10);


    try {
        const emailExists = await db.collection("users").findOne({ email });
        if (emailExists) return res.status(409).send('email ja cadastrado');

        const userNameExists = await db.collection("users").findOne({ userName });
        if (userNameExists) return res.status(409).send('nome de usuario ja cadastrado');

        await db.collection("users").insertOne({ name, email, userName, password: passwordHash })

        return res.status(201).send('usuario cadastrado com sucesso!')

    } catch (err) {
        return res.send(err)
    }
}
