"use client";

import { useState } from "react";
import styles from "./nda.module.css";

interface NdaData {
  party1Company: string;
  party1Name: string;
  party1Title: string;
  party1Address: string;
  party2Company: string;
  party2Name: string;
  party2Title: string;
  party2Address: string;
  effectiveDate: string;
  purpose: string;
  mndaTermType: "years" | "ongoing";
  mndaTermYears: string;
  confTermType: "years" | "perpetuity";
  confTermYears: string;
  governingLaw: string;
  jurisdiction: string;
  modifications: string;
}

const INITIAL: NdaData = {
  party1Company: "",
  party1Name: "",
  party1Title: "",
  party1Address: "",
  party2Company: "",
  party2Name: "",
  party2Title: "",
  party2Address: "",
  effectiveDate: new Date().toISOString().split("T")[0],
  purpose:
    "Evaluating whether to enter into a business relationship with the other party.",
  mndaTermType: "years",
  mndaTermYears: "1",
  confTermType: "years",
  confTermYears: "1",
  governingLaw: "",
  jurisdiction: "",
  modifications: "",
};

function formatDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function mndaTermText(d: NdaData) {
  return d.mndaTermType === "years"
    ? `${d.mndaTermYears} year(s) from the Effective Date`
    : "ongoing until terminated in accordance with the MNDA";
}

function confTermText(d: NdaData) {
  return d.confTermType === "perpetuity"
    ? "in perpetuity"
    : `${d.confTermYears} year(s) from the Effective Date, but in the case of trade secrets until no longer considered a trade secret under applicable law`;
}

function generateMarkdown(d: NdaData): string {
  const date = formatDate(d.effectiveDate);
  const mndaTerm = mndaTermText(d);
  const confTerm = confTermText(d);
  const p = d.purpose || "[Purpose]";
  const gl = d.governingLaw || "[Governing Law State]";
  const jur = d.jurisdiction || "[Jurisdiction]";

  return `# Mutual Non-Disclosure Agreement

## Cover Page

**Effective Date:** ${date}

**Purpose:** ${p}

**MNDA Term:** ${mndaTerm}

**Term of Confidentiality:** ${confTerm}

**Governing Law:** ${gl}

**Jurisdiction:** ${jur}
${d.modifications ? `\n**MNDA Modifications:** ${d.modifications}\n` : ""}
By signing this Cover Page, each party agrees to enter into this MNDA as of the Effective Date.

| | Party 1 | Party 2 |
|---|---|---|
| **Company** | ${d.party1Company || "________________"} | ${d.party2Company || "________________"} |
| **Print Name** | ${d.party1Name || "________________"} | ${d.party2Name || "________________"} |
| **Title** | ${d.party1Title || "________________"} | ${d.party2Title || "________________"} |
| **Notice Address** | ${d.party1Address || "________________"} | ${d.party2Address || "________________"} |
| **Date** | ${date} | ${date} |
| **Signature** | ________________ | ________________ |

---

## Standard Terms

1. **Introduction.** This Mutual Non-Disclosure Agreement (which incorporates these Standard Terms and the Cover Page) ("MNDA") allows each party ("Disclosing Party") to disclose or make available information in connection with the ${p} which (1) the Disclosing Party identifies to the receiving party ("Receiving Party") as "confidential", "proprietary", or the like or (2) should be reasonably understood as confidential or proprietary due to its nature and the circumstances of its disclosure ("Confidential Information"). Each party's Confidential Information also includes the existence and status of the parties' discussions and information on the Cover Page.

2. **Use and Protection of Confidential Information.** The Receiving Party shall: (a) use Confidential Information solely for the ${p}; (b) not disclose Confidential Information to third parties without the Disclosing Party's prior written approval, except that the Receiving Party may disclose Confidential Information to its employees, agents, advisors, contractors and other representatives having a reasonable need to know for the ${p}, provided these representatives are bound by confidentiality obligations no less protective than those in this MNDA; and (c) protect Confidential Information using at least the same protections the Receiving Party uses for its own similar information but no less than a reasonable standard of care.

3. **Exceptions.** The Receiving Party's obligations in this MNDA do not apply to information that it can demonstrate: (a) is or becomes publicly available through no fault of the Receiving Party; (b) it rightfully knew or possessed prior to receipt from the Disclosing Party without confidentiality restrictions; (c) it rightfully obtained from a third party without confidentiality restrictions; or (d) it independently developed without using or referencing the Confidential Information.

4. **Disclosures Required by Law.** The Receiving Party may disclose Confidential Information to the extent required by law, regulation or regulatory authority, subpoena or court order, provided (to the extent legally permitted) it provides the Disclosing Party reasonable advance notice of the required disclosure and reasonably cooperates with the Disclosing Party's efforts to obtain confidential treatment for the Confidential Information.

5. **Term and Termination.** This MNDA commences on the ${date} and expires at the end of the ${mndaTerm}. Either party may terminate this MNDA for any or no reason upon written notice to the other party. The Receiving Party's obligations relating to Confidential Information will survive for ${confTerm}, despite any expiration or termination of this MNDA.

6. **Return or Destruction of Confidential Information.** Upon expiration or termination of this MNDA or upon the Disclosing Party's earlier request, the Receiving Party will: (a) cease using Confidential Information; (b) promptly destroy all Confidential Information in the Receiving Party's possession or control or return it to the Disclosing Party; and (c) if requested by the Disclosing Party, confirm its compliance with these obligations in writing.

7. **Proprietary Rights.** The Disclosing Party retains all of its intellectual property and other rights in its Confidential Information and its disclosure to the Receiving Party grants no license under such rights.

8. **Disclaimer.** ALL CONFIDENTIAL INFORMATION IS PROVIDED "AS IS", WITH ALL FAULTS, AND WITHOUT WARRANTIES, INCLUDING THE IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

9. **Governing Law and Jurisdiction.** This MNDA and all matters relating hereto are governed by, and construed in accordance with, the laws of the State of ${gl}, without regard to the conflict of laws provisions of such ${gl}. Any legal suit, action, or proceeding relating to this MNDA must be instituted in the federal or state courts located in ${jur}. Each party irrevocably submits to the exclusive jurisdiction of such ${jur} in any such suit, action, or proceeding.

10. **Equitable Relief.** A breach of this MNDA may cause irreparable harm for which monetary damages are an insufficient remedy. Upon a breach of this MNDA, the Disclosing Party is entitled to seek appropriate equitable relief, including an injunction, in addition to its other remedies.

11. **General.** Neither party has an obligation under this MNDA to disclose Confidential Information to the other or proceed with any proposed transaction. This MNDA constitutes the entire agreement of the parties with respect to its subject matter, and supersedes all prior and contemporaneous understandings, agreements, representations, and warranties, whether written or oral, regarding such subject matter. This MNDA may only be amended, modified, waived, or supplemented by an agreement in writing signed by both parties.

---

*Common Paper Mutual Non-Disclosure Agreement Version 1.0 — free to use under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)*
`;
}

function Var({ children }: { children: React.ReactNode }) {
  return <mark className={styles.variable}>{children}</mark>;
}

export default function NdaPage() {
  const [d, setD] = useState<NdaData>(INITIAL);

  const set =
    (field: keyof NdaData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setD((prev) => ({ ...prev, [field]: e.target.value }));

  function downloadMd() {
    const content = generateMarkdown(d);
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Mutual-NDA.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  const date = formatDate(d.effectiveDate);
  const mndaTerm = mndaTermText(d);
  const confTerm = confTermText(d);
  const p = d.purpose || "[Purpose]";
  const gl = d.governingLaw || "[Governing Law State]";
  const jur = d.jurisdiction || "[Jurisdiction]";

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="/" className={styles.back}>
          ← ParaLegal
        </a>
        <h1 className={styles.title}>Mutual NDA Creator</h1>
        <div className={styles.headerActions}>
          <button
            onClick={() => window.print()}
            className={styles.btnSecondary}
          >
            Print / Save PDF
          </button>
          <button onClick={downloadMd} className={styles.btnPrimary}>
            Download .md
          </button>
        </div>
      </header>

      <div className={styles.layout}>
        {/* ── FORM PANEL ───────────────────────────────────────── */}
        <aside className={styles.formPanel}>
          <div className={styles.formSection}>
            <h2 className={styles.sectionHeading}>Party 1</h2>
            <label className={styles.field}>
              Company Name
              <input
                value={d.party1Company}
                onChange={set("party1Company")}
                placeholder="Acme Corp"
              />
            </label>
            <label className={styles.field}>
              Signatory Name
              <input
                value={d.party1Name}
                onChange={set("party1Name")}
                placeholder="Jane Smith"
              />
            </label>
            <label className={styles.field}>
              Title
              <input
                value={d.party1Title}
                onChange={set("party1Title")}
                placeholder="CEO"
              />
            </label>
            <label className={styles.field}>
              Notice Address
              <textarea
                rows={2}
                value={d.party1Address}
                onChange={set("party1Address")}
                placeholder="123 Main St, City, State 00000"
              />
            </label>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.sectionHeading}>Party 2</h2>
            <label className={styles.field}>
              Company Name
              <input
                value={d.party2Company}
                onChange={set("party2Company")}
                placeholder="Beta Inc"
              />
            </label>
            <label className={styles.field}>
              Signatory Name
              <input
                value={d.party2Name}
                onChange={set("party2Name")}
                placeholder="John Doe"
              />
            </label>
            <label className={styles.field}>
              Title
              <input
                value={d.party2Title}
                onChange={set("party2Title")}
                placeholder="CTO"
              />
            </label>
            <label className={styles.field}>
              Notice Address
              <textarea
                rows={2}
                value={d.party2Address}
                onChange={set("party2Address")}
                placeholder="456 Oak Ave, City, State 00000"
              />
            </label>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.sectionHeading}>Agreement Terms</h2>
            <label className={styles.field}>
              Effective Date
              <input
                type="date"
                value={d.effectiveDate}
                onChange={set("effectiveDate")}
              />
            </label>
            <label className={styles.field}>
              Purpose
              <textarea
                rows={3}
                value={d.purpose}
                onChange={set("purpose")}
              />
            </label>

            <fieldset className={styles.fieldset}>
              <legend>MNDA Term</legend>
              <label className={styles.radioRow}>
                <input
                  type="radio"
                  name="mndaTermType"
                  checked={d.mndaTermType === "years"}
                  onChange={() => setD((p) => ({ ...p, mndaTermType: "years" }))}
                />
                <span>Expires after</span>
                <input
                  type="number"
                  className={styles.numInput}
                  min="1"
                  max="20"
                  value={d.mndaTermYears}
                  onChange={set("mndaTermYears")}
                  disabled={d.mndaTermType !== "years"}
                />
                <span>year(s)</span>
              </label>
              <label className={styles.radioRow}>
                <input
                  type="radio"
                  name="mndaTermType"
                  checked={d.mndaTermType === "ongoing"}
                  onChange={() =>
                    setD((p) => ({ ...p, mndaTermType: "ongoing" }))
                  }
                />
                <span>Until terminated</span>
              </label>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend>Term of Confidentiality</legend>
              <label className={styles.radioRow}>
                <input
                  type="radio"
                  name="confTermType"
                  checked={d.confTermType === "years"}
                  onChange={() => setD((p) => ({ ...p, confTermType: "years" }))}
                />
                <span>Expires after</span>
                <input
                  type="number"
                  className={styles.numInput}
                  min="1"
                  max="20"
                  value={d.confTermYears}
                  onChange={set("confTermYears")}
                  disabled={d.confTermType !== "years"}
                />
                <span>year(s)</span>
              </label>
              <label className={styles.radioRow}>
                <input
                  type="radio"
                  name="confTermType"
                  checked={d.confTermType === "perpetuity"}
                  onChange={() =>
                    setD((p) => ({ ...p, confTermType: "perpetuity" }))
                  }
                />
                <span>In perpetuity</span>
              </label>
            </fieldset>

            <label className={styles.field}>
              Governing Law (State)
              <input
                value={d.governingLaw}
                onChange={set("governingLaw")}
                placeholder="Delaware"
              />
            </label>
            <label className={styles.field}>
              Jurisdiction
              <input
                value={d.jurisdiction}
                onChange={set("jurisdiction")}
                placeholder="New Castle County, Delaware"
              />
            </label>
            <label className={styles.field}>
              MNDA Modifications{" "}
              <span className={styles.optional}>(optional)</span>
              <textarea
                rows={3}
                value={d.modifications}
                onChange={set("modifications")}
                placeholder="List any modifications to the Standard Terms..."
              />
            </label>
          </div>
        </aside>

        {/* ── PREVIEW PANEL ────────────────────────────────────── */}
        <main className={styles.previewPanel}>
          <div className={styles.document}>
            <h1 className={styles.docTitle}>Mutual Non-Disclosure Agreement</h1>
            <p className={styles.docSubtitle}>
              Common Paper Standard Terms — Version 1.0
            </p>

            {/* COVER PAGE */}
            <section className={styles.docSection}>
              <h2 className={styles.docSectionTitle}>Cover Page</h2>
              <table className={styles.coverTable}>
                <tbody>
                  <tr>
                    <th>Effective Date</th>
                    <td>
                      <Var>{date}</Var>
                    </td>
                  </tr>
                  <tr>
                    <th>Purpose</th>
                    <td>
                      <Var>{p}</Var>
                    </td>
                  </tr>
                  <tr>
                    <th>MNDA Term</th>
                    <td>
                      <Var>{mndaTerm}</Var>
                    </td>
                  </tr>
                  <tr>
                    <th>Term of Confidentiality</th>
                    <td>
                      <Var>{confTerm}</Var>
                    </td>
                  </tr>
                  <tr>
                    <th>Governing Law</th>
                    <td>
                      <Var>{gl}</Var>
                    </td>
                  </tr>
                  <tr>
                    <th>Jurisdiction</th>
                    <td>
                      <Var>{jur}</Var>
                    </td>
                  </tr>
                  {d.modifications && (
                    <tr>
                      <th>Modifications</th>
                      <td>
                        <Var>{d.modifications}</Var>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </section>

            {/* SIGNATURE TABLE */}
            <section className={styles.docSection}>
              <p className={styles.sigIntro}>
                By signing this Cover Page, each party agrees to enter into
                this MNDA as of the Effective Date.
              </p>
              <table className={styles.sigTable}>
                <thead>
                  <tr>
                    <th></th>
                    <th>Party 1</th>
                    <th>Party 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Company</strong>
                    </td>
                    <td>
                      <Var>
                        {d.party1Company || (
                          <span className={styles.empty}>Company Name</span>
                        )}
                      </Var>
                    </td>
                    <td>
                      <Var>
                        {d.party2Company || (
                          <span className={styles.empty}>Company Name</span>
                        )}
                      </Var>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Print Name</strong>
                    </td>
                    <td>
                      <Var>
                        {d.party1Name || (
                          <span className={styles.empty}>Signatory Name</span>
                        )}
                      </Var>
                    </td>
                    <td>
                      <Var>
                        {d.party2Name || (
                          <span className={styles.empty}>Signatory Name</span>
                        )}
                      </Var>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Title</strong>
                    </td>
                    <td>
                      <Var>
                        {d.party1Title || (
                          <span className={styles.empty}>Title</span>
                        )}
                      </Var>
                    </td>
                    <td>
                      <Var>
                        {d.party2Title || (
                          <span className={styles.empty}>Title</span>
                        )}
                      </Var>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Notice Address</strong>
                    </td>
                    <td style={{ whiteSpace: "pre-wrap" }}>
                      <Var>
                        {d.party1Address || (
                          <span className={styles.empty}>Address</span>
                        )}
                      </Var>
                    </td>
                    <td style={{ whiteSpace: "pre-wrap" }}>
                      <Var>
                        {d.party2Address || (
                          <span className={styles.empty}>Address</span>
                        )}
                      </Var>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Date</strong>
                    </td>
                    <td>
                      <Var>{date}</Var>
                    </td>
                    <td>
                      <Var>{date}</Var>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Signature</strong>
                    </td>
                    <td className={styles.sigLine}>___________________</td>
                    <td className={styles.sigLine}>___________________</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <hr className={styles.divider} />

            {/* STANDARD TERMS */}
            <section className={styles.docSection}>
              <h2 className={styles.docSectionTitle}>Standard Terms</h2>
              <ol className={styles.termsList}>
                <li>
                  <strong>Introduction.</strong> This Mutual Non-Disclosure
                  Agreement (which incorporates these Standard Terms and the
                  Cover Page) (&quot;MNDA&quot;) allows each party
                  (&quot;Disclosing Party&quot;) to disclose or make available
                  information in connection with the <Var>{p}</Var> which (1)
                  the Disclosing Party identifies to the receiving party
                  (&quot;Receiving Party&quot;) as &quot;confidential&quot;,
                  &quot;proprietary&quot;, or the like or (2) should be
                  reasonably understood as confidential or proprietary due to
                  its nature and the circumstances of its disclosure
                  (&quot;Confidential Information&quot;). Each party&apos;s
                  Confidential Information also includes the existence and
                  status of the parties&apos; discussions and information on the
                  Cover Page.
                </li>
                <li>
                  <strong>Use and Protection of Confidential Information.</strong>{" "}
                  The Receiving Party shall: (a) use Confidential Information
                  solely for the <Var>{p}</Var>; (b) not disclose Confidential
                  Information to third parties without the Disclosing
                  Party&apos;s prior written approval, except that the Receiving
                  Party may disclose Confidential Information to its employees,
                  agents, advisors, contractors and other representatives having
                  a reasonable need to know for the <Var>{p}</Var>, provided
                  these representatives are bound by confidentiality obligations
                  no less protective of the Disclosing Party than the applicable
                  terms in this MNDA; and (c) protect Confidential Information
                  using at least the same protections the Receiving Party uses
                  for its own similar information but no less than a reasonable
                  standard of care.
                </li>
                <li>
                  <strong>Exceptions.</strong> The Receiving Party&apos;s
                  obligations in this MNDA do not apply to information that it
                  can demonstrate: (a) is or becomes publicly available through
                  no fault of the Receiving Party; (b) it rightfully knew or
                  possessed prior to receipt from the Disclosing Party without
                  confidentiality restrictions; (c) it rightfully obtained from
                  a third party without confidentiality restrictions; or (d) it
                  independently developed without using or referencing the
                  Confidential Information.
                </li>
                <li>
                  <strong>Disclosures Required by Law.</strong> The Receiving
                  Party may disclose Confidential Information to the extent
                  required by law, regulation or regulatory authority, subpoena
                  or court order, provided (to the extent legally permitted) it
                  provides the Disclosing Party reasonable advance notice of the
                  required disclosure and reasonably cooperates with the
                  Disclosing Party&apos;s efforts to obtain confidential
                  treatment for the Confidential Information.
                </li>
                <li>
                  <strong>Term and Termination.</strong> This MNDA commences on
                  the <Var>{date}</Var> and expires at the end of the{" "}
                  <Var>{mndaTerm}</Var>. Either party may terminate this MNDA
                  for any or no reason upon written notice to the other party.
                  The Receiving Party&apos;s obligations relating to
                  Confidential Information will survive for the{" "}
                  <Var>{confTerm}</Var>, despite any expiration or termination
                  of this MNDA.
                </li>
                <li>
                  <strong>Return or Destruction of Confidential Information.</strong>{" "}
                  Upon expiration or termination of this MNDA or upon the
                  Disclosing Party&apos;s earlier request, the Receiving Party
                  will: (a) cease using Confidential Information; (b) promptly
                  destroy all Confidential Information in the Receiving
                  Party&apos;s possession or control or return it to the
                  Disclosing Party; and (c) if requested by the Disclosing
                  Party, confirm its compliance with these obligations in
                  writing.
                </li>
                <li>
                  <strong>Proprietary Rights.</strong> The Disclosing Party
                  retains all of its intellectual property and other rights in
                  its Confidential Information and its disclosure to the
                  Receiving Party grants no license under such rights.
                </li>
                <li>
                  <strong>Disclaimer.</strong> ALL CONFIDENTIAL INFORMATION IS
                  PROVIDED &quot;AS IS&quot;, WITH ALL FAULTS, AND WITHOUT
                  WARRANTIES, INCLUDING THE IMPLIED WARRANTIES OF TITLE,
                  MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                </li>
                <li>
                  <strong>Governing Law and Jurisdiction.</strong> This MNDA
                  and all matters relating hereto are governed by, and construed
                  in accordance with, the laws of the State of <Var>{gl}</Var>,
                  without regard to the conflict of laws provisions of such{" "}
                  <Var>{gl}</Var>. Any legal suit, action, or proceeding
                  relating to this MNDA must be instituted in the federal or
                  state courts located in <Var>{jur}</Var>. Each party
                  irrevocably submits to the exclusive jurisdiction of such{" "}
                  <Var>{jur}</Var> in any such suit, action, or proceeding.
                </li>
                <li>
                  <strong>Equitable Relief.</strong> A breach of this MNDA may
                  cause irreparable harm for which monetary damages are an
                  insufficient remedy. Upon a breach of this MNDA, the
                  Disclosing Party is entitled to seek appropriate equitable
                  relief, including an injunction, in addition to its other
                  remedies.
                </li>
                <li>
                  <strong>General.</strong> Neither party has an obligation
                  under this MNDA to disclose Confidential Information to the
                  other or proceed with any proposed transaction. Neither party
                  may assign this MNDA without the prior written consent of the
                  other party, except in connection with a merger,
                  reorganization, acquisition or other transfer of all or
                  substantially all its assets or voting securities. This MNDA
                  constitutes the entire agreement of the parties with respect
                  to its subject matter, and supersedes all prior and
                  contemporaneous understandings, agreements, representations,
                  and warranties, whether written or oral, regarding such
                  subject matter. This MNDA may only be amended, modified,
                  waived, or supplemented by an agreement in writing signed by
                  both parties.
                </li>
              </ol>
              <p className={styles.docFooter}>
                Common Paper Mutual Non-Disclosure Agreement Version 1.0 —
                free to use under CC BY 4.0
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
