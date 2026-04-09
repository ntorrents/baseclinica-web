import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocumentShell } from "@/components/layout/LegalDocumentShell";
import { CONTACT_EMAIL } from "@/config/contact";
import { legalEntity } from "@/config/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD en el sitio web y formularios de BaseClinica.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalDocumentShell title="Política de privacidad">
      <p>
        El responsable del tratamiento de los datos personales que se traten a través de este sitio
        web es el titular indicado en el apartado de datos identificativos. El tratamiento se ajusta
        al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD) y normativa
        complementaria.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Identidad:</strong> {legalEntity.legalName} ({legalEntity.tradeName})
        </li>
        <li>
          <strong>NIF / CIF:</strong> {legalEntity.taxId}
        </li>
        <li>
          <strong>Domicilio:</strong> {legalEntity.address}
        </li>
        <li>
          <strong>Correo para ejercer derechos:</strong>{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </li>
      </ul>

      <h2>2. Finalidad del tratamiento y base legal</h2>
      <h3>2.1. Formulario de contacto y consultas</h3>
      <p>
        <strong>Finalidad:</strong> Gestionar tu solicitud, responder a tu consulta y, en su caso,
        mantener comunicaciones relacionadas con los servicios ofrecidos.
        <br />
        <strong>Base legal:</strong> Ejecución de medidas precontractuales a petición del interesado
        (art. 6.1.b RGPD) y, cuando proceda, interés legítimo en atender consultas comerciales
        razonables (art. 6.1.f RGPD), sin perjuicio de obtener tu consentimiento cuando la ley lo
        exija para comunicaciones promocionales específicas.
      </p>
      <h3>2.2. Navegación y seguridad técnica</h3>
      <p>
        <strong>Finalidad:</strong> Permitir el funcionamiento del sitio, medir el rendimiento de
        forma agregada si se utilizan herramientas de analítica con configuración adecuada, y
        mantener la seguridad.
        <br />
        <strong>Base legal:</strong> Interés legítimo (art. 6.1.f RGPD) y, para cookies o
        tecnologías similares no exentas, consentimiento cuando resulte aplicable según la Política
        de cookies que publiques si las utilizas.
      </p>
      <h3>2.3. Datos de salud o categorías especiales</h3>
      <p>
        Este sitio web no solicita datos de salud a través del formulario de contacto. Los datos de
        especial protección que pudieran tratarse en el marco de los servicios contratados (por
        ejemplo, en la aplicación de gestión) se regirán por las cláusulas específicas del contrato
        de prestación de servicios, la información facilitada en el momento de la contratación y la
        normativa sectorial aplicable. Si en algún formulario se pidiera información sensible sin
        necesidad, te rogamos no la incluyas en el mensaje inicial de contacto.
      </p>

      <h2>3. Conservación de los datos</h2>
      <p>
        Los datos del formulario de contacto se conservarán el tiempo necesario para atender la
        consulta y, posteriormente, durante los plazos legales aplicables o el que resulte
        proporcional para posibles reclamaciones. Si no se llegara a una relación comercial, podrán
        eliminarse antes salvo obligación legal en contrario.
      </p>

      <h2>4. Destinatarios y encargados del tratamiento</h2>
      <p>
        No cedemos tus datos a terceros con fines propios. Sí pueden tener acceso, en la medida
        necesaria, proveedores que nos prestan servicios auxiliares (por ejemplo, alojamiento del
        sitio y envío de correo electrónico asociado al formulario de contacto), actuando como
        encargados del tratamiento con las garantías contractuales del artículo 28 del RGPD.
      </p>

      <h2>5. Transferencias internacionales</h2>
      <p>
        Si algún proveedor trata datos fuera del Espacio Económico Europeo, se aplicarán las garantías
        previstas en el RGPD (decisión de adecuación, cláusulas tipo u otras medidas válidas).
      </p>

      <h2>6. Derechos del interesado</h2>
      <p>Puedes ejercer en cualquier momento los derechos de:</p>
      <ul>
        <li>Acceso, rectificación y supresión</li>
        <li>Limitación del tratamiento y oposición</li>
        <li>Portabilidad, cuando proceda</li>
        <li>Retirar el consentimiento cuando el tratamiento se base en él</li>
      </ul>
      <p>
        Para ejercerlos, escribe a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> indicando el derecho que ejercitas y
        acreditando tu identidad. También puedes presentar reclamación ante la Agencia Española de
        Protección de Datos (<a href="https://www.aepd.es">www.aepd.es</a>).
      </p>

      <h2>7. Menores de edad</h2>
      <p>
        Los servicios están dirigidos a profesionales y empresas. No recopilamos de forma
        intencionada datos de menores de 14 años a través de este sitio. Si detectáramos tal
        supuesto, procederíamos a su eliminación.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Se aplican medidas técnicas y organizativas adecuadas al riesgo para proteger los datos
        contra el acceso no autorizado, la pérdida o la alteración, de acuerdo con el estado de la
        técnica.
      </p>

      <h2>9. Modificaciones</h2>
      <p>
        Esta política puede actualizarse para adaptarse a cambios normativos o del sitio. La versión
        vigente será la publicada en esta página con la fecha de actualización indicada.
      </p>

      <p className="legal-muted">
        Última actualización: abril de 2026. Consulta también el{" "}
        <Link href="/aviso-legal">Aviso legal</Link>.
      </p>
    </LegalDocumentShell>
  );
}
