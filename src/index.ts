import html from "./index.html";

export default {
	async fetch(request): Promise<Response> {
		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
