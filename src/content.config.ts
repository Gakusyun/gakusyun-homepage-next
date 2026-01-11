import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 定义博客文章集合
const blog = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		published: z.coerce.date(),
		description: z.string().optional(),
		tags: z.array(z.string()).optional(),
		category: z.string().optional(),
		draft: z.boolean().default(false),
		lang: z.string().default('cn'),
	}),
});

// 导出所有集合
export const collections = { posts: blog };
