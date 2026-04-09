import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocumentShell } from "@/components/layout/LegalDocumentShell";
import { CONTACT_EMAIL } from "@/config/contact";
import { legalEntity } from "@/config/legal";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Información general, condiciones de uso del sitio web y responsabilidades del titular según la normativa aplicable en España.",
};

export default function AvisoLegalPage() {
  return (
    <LegalDocumentShell title="Aviso legal">
      <p>
        En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se facilita la siguiente información
        general del titular de este sitio web.
      </p>

      <h2>1. Datos identificativos</h2>
      <ul>
        <li>
          <strong>Denominación comercial:</strong> {legalEntity.tradeName}
        </li>
        <li>
          <strong>Titular / razón social:</strong> {legalEntity.legalName}
        </li>
        <li>
          <strong>NIF / CIF:</strong> {legalEntity.taxId}
        </li>
        <li>
          <strong>Domicilio:</strong> {legalEntity.address}
        </li>
        <li>
          <strong>Correo electrónico de contacto:</strong>{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </li>
        <li>
          <strong>Sitio web:</strong> {legalEntity.domain}
        </li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente sitio web tiene por objeto dar a conocer los servicios de software de gestión
        interna, diseño web corporativo y packs integrales para clínicas y profesionales del ámbito
        sanitario y afines, así como facilitar canales de contacto. La información publicada tiene
        carácter meramente informativo y comercial, sin constituir oferta vinculante salvo que se
        formalice expresamente en un contrato o propuesta por escrito.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y uso del sitio implica la aceptación de este aviso legal. El usuario se compromete
        a utilizar el sitio de conformidad con la ley, la buena fe y el orden público. Queda
        prohibido cualquier uso que pueda dañar, inutilizar o sobrecargar el sitio, o que impida su
        normal utilización por parte de terceros.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los contenidos del sitio (textos, imágenes, diseño, logotipos, estructura, código y demás
        elementos) son titularidad del titular del sitio o de terceros que han autorizado su uso,
        estando protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida
        su reproducción, distribución, comunicación pública o transformación sin autorización expresa,
        salvo los supuestos permitidos por la ley o uso privado.
      </p>

      <h2>5. Enlaces</h2>
      <p>
        El sitio puede incluir enlaces a páginas de terceros. El titular no se responsabiliza del
        contenido ni de las políticas de dichos sitios externos. El establecimiento de un enlace no
        implica en ningún caso relación de colaboración o patrocinio.
      </p>

      <h2>6. Exclusión de garantías y responsabilidad</h2>
      <p>
        Se adoptan medidas razonables para mantener el sitio operativo y la información actualizada,
        sin que ello suponga garantía de ausencia de errores, interrupciones o virus. El titular no
        se hace responsable de los daños derivados del uso del sitio ni de decisiones tomadas en
        base a la información publicada, sin perjuicio de lo imperativo legalmente.
      </p>

      <h2>7. Legislación y jurisdicción</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para la resolución de conflictos, las
        partes se someten a los juzgados y tribunales del domicilio del usuario cuando así lo
        imponga la normativa de consumidores; en su defecto, a los de España según corresponda.
      </p>

      <p className="legal-muted">
        Última actualización: abril de 2026. Puedes consultar también nuestra{" "}
        <Link href="/politica-privacidad">Política de privacidad</Link>.
      </p>
    </LegalDocumentShell>
  );
}
