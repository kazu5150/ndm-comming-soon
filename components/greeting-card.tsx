export default function GreetingCard() {
  return (
    <div
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 md:p-6 shadow-lg w-full max-w-2xl mx-auto mb-8 text-white opacity-0 animate-fade-in-up"
      style={{ animationDelay: "0.5s" }}
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-4">AIがつなぐ、人と未来。</h3>
      <div className="space-y-4 text-sm md:text-base">
        <p>
          従来のマーケティングにAIの知恵を。
          お客様一人ひとりに響く、新しい物語を。ネクストダイレクトマーケティングは、AIと人間の知恵を融合させ、お客様の心に響く、パーソナライズされたマーケティングを実現します。
        </p>
        <p>
          データベースとテレマーケティングの常識を覆し、 AIが導く、より効果的で効率的なマーケティング戦略を提案します。
        </p>
        <p>お客様のビジネスを、次のステージへおつれ致します。</p>
      </div>
      <p className="text-right font-semibold mt-4">森田浩司</p>
    </div>
  )
}

