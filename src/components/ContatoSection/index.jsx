import Container from "../Container";
export default function ContatoForm() {
    return (
        <section id="contact-form" className="contact-form">
          <h1>Ficou interessado?</h1>
          <p>
            Então deixe o seu contato abaixo e garanta uma consultoria* grátis com
            um dos nossos especialistas!
          </p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Nome:" required />
              <input type="text" placeholder="Empresa:" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email:" required />
              <input type="text" placeholder="Telefone/WhatsApp:" required />
            </div>
            <textarea
              placeholder="Conte-nos um pouco sobre sua empresa:"
              rows="4"
              required
            ></textarea>
            <button type="submit">Quero agendar uma consultoria gratuita!</button>
          </form>
        </section>
      );
    };   