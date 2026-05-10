const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
}

export default {
    async fetch(request, env) {
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: CORS_HEADERS });
        }

        if (request.method !== 'POST') {
            return jsonResponse({ error: 'Method Not Allowed' }, 405);
        }

        try {
            const body = await request.json();

            if (!body.messages || !Array.isArray(body.messages)) {
                return jsonResponse({ error: 'messages 필드가 필요합니다.' }, 400);
            }

            const apiResponse = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'x-api-key': env.NaroTask_API,
                    'anthropic-version': '2023-06-01',
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'claude-haiku-4-5-20251001',
                    max_tokens: 500,
                    system: '당신은 나로입니다. 유저의 생산성을 돕는 귀엽고 친근한 AI 어시스턴트예요. 짧고 친근하게 답해주세요.',
                    messages: body.messages,
                }),
            });

            const data = await apiResponse.json();

            if (!apiResponse.ok) {
                return jsonResponse({ error: data.error?.message || 'API 오류가 발생했습니다.' }, apiResponse.status);
            }

            return jsonResponse(data);
        } catch (e) {
            return jsonResponse({ error: '서버 내부 오류: ' + e.message }, 500);
        }
    },
};