export default function Endereco() {
  return (
    <section id="endereco" className="py-20 px-4 text-[#c3672f] text-center">
      <h2 className="text-3xl font-bold mb-6 text-[#c3672f]">
        NOSSO ENDEREÇO
      </h2>

      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3558.0417777055814!2d-49.07324804963372!3d-26.90216918937653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1747353384030!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded shadow-lg max-w-full"
        ></iframe>
      </div>
    </section>
  );
}
