const User = require('../models/User');

module.exports = {

    //armazenar usuario
    async store(req, res) {

        const { name, email } = req.body;

        const existEmail = await User.findOne({
            where: { 'email': email }
        });

        if (existEmail) {
            console.log({ error: "email already registered" });
            return res.json({ error: "email already registered" });
        }

        const user = await User.create({ name, email });

        return res.json(user);
    },

    //listar todos os usuarios
    async index(req, res) {

        const user = await User.findAll();

        return res.json(user);
    },

    async read(req, res) {

        const { user_id } = req.params;

        const user = await User.findByPk(user_id);

        if (!user)
            return res.json({ "error": "User not found" });

        return res.json({ user });

    },

    update(req, res) {

        return res.json({ "user": "update" })
    },

    async delete(req, res) {

        const { user_id } = req.params;

        const user = await User.findByPk(user_id);

        if (!user)
            return res.json({ "error": "user not found" });

        try {

            await User.destroy({
                where: { 'id': user_id }
            });

        } catch (error) {
            return res.json({ "error": error });
        }

        return res.json({ "status": "User deleted" })
    }

}