import { updateRecord } from '../../../../utils/dbUtils';

export async function POST(req) {
    try {
        const { id, username, password } = await req.json();
        if (!id || !username || !password) {
            return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
        }

        updateRecord('users', id, { username, password });
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to update user' }), { status: 500 });
    }
}
