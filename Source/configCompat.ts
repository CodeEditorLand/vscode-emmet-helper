/*
MIT License

Copyright (c) 2020 Sergey Chikuyonok <serge.che@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

export interface SnippetsMap {
	[name: string]: string;
}

/**
 * Parses raw snippets definitions with possibly multiple keys into a plan
 * snippet map
 */
export function parseSnippets(snippets: SnippetsMap): SnippetsMap {
	const result: SnippetsMap = {};

	Object.keys(snippets).forEach((k) => {
		for (const name of k.split("|")) {
			result[name] = snippets[k];
		}
	});

	return result;
}

/**
 * List of all known syntaxes
 */
export const syntaxes = {
	markup: ["html", "xml", "xsl", "jsx", "js", "pug", "slim", "haml", "vue"],
	stylesheet: ["css", "sass", "scss", "less", "sss", "stylus"],
};
