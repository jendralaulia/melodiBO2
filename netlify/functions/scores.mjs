const { Client } = require('pg');

exports.handler = async (event, context) => {
    const client = new Client({ connectionString: process.env.NETLIFY_DATABASE_URL });
    
    try {
        await client.connect();
        await client.query(`
            CREATE TABLE IF NOT EXISTS mr_white_scores (
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                avatar VARCHAR(50),
                score INTEGER NOT NULL,
                rank VARCHAR(50),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        if (event.httpMethod === 'GET') {
            const result = await client.query('SELECT * FROM mr_white_scores ORDER BY score DESC LIMIT 10');
            return { statusCode: 200, body: JSON.stringify(result.rows) };
        } 
        else if (event.httpMethod === 'POST') {
            const { name, avatar, score, rank } = JSON.parse(event.body);
            await client.query('INSERT INTO mr_white_scores (name, avatar, score, rank) VALUES ($1, $2, $3, $4)', [name, avatar, score, rank]);
            return { statusCode: 200, body: JSON.stringify({ message: "Skor tersimpan!" }) };
        }
        else if (event.httpMethod === 'DELETE') {
            const { password } = JSON.parse(event.body);
            if (password === '19AG') {
                await client.query('DELETE FROM mr_white_scores');
                return { statusCode: 200, body: JSON.stringify({ success: true, message: "Database direset!" }) };
            }
            return { statusCode: 401, body: JSON.stringify({ success: false, error: "Password Salah" }) };
        }
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: "Database Error", details: error.message }) };
    } finally {
        await client.end();
    }
};
