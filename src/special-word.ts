export type SpecialWord = {
	category: "UserMatch",
	username: string,
	description: string,
} | {
	category: "Implicate",
	cause: string,
	content: string,
	link: `${"http" | "https"}://${string}`
}

export type PropsOf<T> = Omit<Extract<SpecialWord, { category: T }>, "category">

export const specialWordList = new Map<string, SpecialWord>([
	[
		"まふまふ",
		{
			category: "UserMatch",
			description: "高低差のある歌声、繊細かつ少々難解な歌詞、独特な世界観の楽曲を作る。",
			username: "uni_mafumafu",
		},
	],
	[
		"これこれ",
		{
			category: "UserMatch",
			description: "ニコニコ生放送をはじめ、多くの場所で活動している配信者。",
			username: "korekore19",
		},
	],
	[
		"ぬるぬる",
		{
			category: "UserMatch",
			description: "ぬぁ～んဗ",
			username: "nullnyat",
		},
	],
	[
		"わしわし",
		{
			category: "Implicate",
			cause: "やばいクレーマーのSUSURU TV",
			content: "ワシワシとした食感の麺の中には髪の毛が入っており、さすがのSUSURUも厨房に入っていってしまいました〜！",
			link: "https://twitter.com/susuru_tv/status/1433769424683769858",
		},
	],
	[
		"ぽこぽこ",
		{
			category: "Implicate",
			cause: "あぁ～！水素の音ォ〜！！",
			content: "このスティックをお水の中に入れるだけで、ほら！ﾎﾟｺｯ、ﾎﾟｺﾎﾟｺﾎﾟｺｯ！水素が出てきてるのがわかるでしょう？",
			link: "https://www.nicovideo.jp/watch/sm29003244",
		},
	],
	[
		"しりしり",
		{
			category: "Implicate",
			cause: "ののじ サラダおろし",
			content: "この切り方を見て何か気になりません？思い出しました？そう！沖縄料理で有名の、にんじんしりしり",
			link: "https://www.nicovideo.jp/watch/sm22193155",
		},
	],
])
