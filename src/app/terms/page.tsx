import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lunox Services",
  description:
    "Terms and conditions for Lunox Services window, door, and home improvement contracts in Scotland.",
};

/**
 * Terms adapted from typical Scottish glazing contractor terms
 * (structure and clauses commonly used by Scotland UPVC installers,
 * rewritten for Lunox Services contact details).
 */
const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: "1. Notice of right to cancel",
    paragraphs: [
      `Where contracts are made in your home or place of work, if you are unhappy with your contract for any reason it can be cancelled and a refund of the deposit can be obtained by giving written notice by emailing ${company.email} or by writing to Lunox Services. The notice should be sent within seven Business Days (being a day on which clearing banks are open for business in Scotland) of the date on which the contract was signed (this is known as the “cancellation period”).`,
      "If you cancel the agreement after the cancellation period, or once works have commenced, you must pay any reasonable losses and costs we suffer because of the cancellation including, but not limited to, loss of profit (this will be dependent on the stage of order).",
    ],
  },
  {
    title: "2. Survey arrangements",
    paragraphs: [
      "The contract is subject to a site inspection and survey. Our team will be in touch with you to arrange an appointment for our survey team to visit you, as soon as it is reasonably practicable after your contract is confirmed, to carry out a site inspection. You will be offered an appointment date that is within 28 days of the date that this contract is signed. The surveyor will check the full specification to ensure accuracy and feasibility and will check your personal requirements.",
      "If the surveyor reports that there are problems relating, for example, to the structure (including the presence of hazardous materials such as asbestos), dimensions or access to the property (including the need to arrange scaffolding), then without obligation on your part, we may quote a price for the additional work. If you decline to accept the revised quotation, we may cancel the agreement by sending you written notice and your deposit will be returned, less any costs incurred. If you do not decline or accept the revised quotation within fourteen days of receipt, we will be entitled to assume that you have declined.",
      "If the surveyor reports significant technical problems which make manufacture or satisfactory installation materially more difficult than initially anticipated, we reserve the right to cancel the agreement.",
      "To allow for fitting tolerances and any abnormalities in the original openings, we do not guarantee that replacement window or door dimensions will match the originals exactly. On certain installations frame extensions may be required.",
      "Generally there is no need to obtain local authority approval for straightforward window replacement, but approval may be required for certain works which involve alterations to brickwork. When alterations to our original specifications are required by a local authority, we will be under no obligation to meet such costs unless those alterations were or should have been known to us at site inspection.",
      "It is a requirement of Building Standards that dwelling-house windows above four metres from ground level must be cleanable safely from within or from a balcony. Our consultant will discuss this with you at the time of sale. The choice of styles remains with you.",
    ],
  },
  {
    title: "3. Delivery and installation dates",
    paragraphs: [
      "We will agree an installation date with you and shall give you a choice of dates where reasonably possible.",
      "If the work is not commenced within the estimated installation period stated in the contract, you may write to us requiring the work to be completed within twelve weeks or another period agreed between you and us. If the work is not completed within this extended period, you may cancel the outstanding work without penalty by written notice, and you will be entitled to a refund of any monies which represent payment for installation of materials in excess of work actually carried out. If we have carried out work to a value which exceeds any payment made by you, we will be entitled to payment of the difference on demand.",
      "We shall not be in breach of this contract nor liable for delay in performing, or failure to perform, our obligations if such delay or failure results from events beyond our reasonable control (for example fire, flooding, civil disturbance, strike action, criminal damage, acts of war or nature, or supply-chain disruption).",
    ],
  },
  {
    title: "4. Disputes",
    paragraphs: [
      "You or we are entitled to cancel this contract in the event of any serious breach of contract by you or us.",
      "Disputes can be put to arbitration using an independent surveyor agreeable to both parties. If the independent inspection finds that your complaint is well founded, we will pay for the cost of that inspection. We will not be responsible for the cost of any surveyors, lawyers or other advisers contracted by you without our prior agreement.",
      "If there is an alleged defect with regard to the installation you are entitled to retain 5% of the balance outstanding pending investigation and, if appropriate, rectification. As soon as the defect is remedied or if it is determined that there is no defect, all monies due become payable immediately.",
    ],
  },
  {
    title: "5. Payment",
    paragraphs: [
      "Payment is due on completion of the installation when payable. You shall not be entitled by reason of any alleged minor defect to withhold more than 5% of the sum due.",
      "We reserve the right to charge interest at 3% above the Bank of England base rate on any balance remaining outstanding after payment is due.",
      "VAT is payable at the appropriate rate as of the date of invoice.",
      `We will accept payment of the contract price by bank transfer, debit/credit card, or other methods we confirm in writing. For queries about payment contact us on WhatsApp or call ${company.phoneDisplay}, or email ${company.email}.`,
    ],
  },
  {
    title: "6. Installation arrangements",
    paragraphs: [
      "We do not move any services, fixtures or fittings, internal or external, which are ancillary to the basic structure of the property. You shall remove household fixtures before work starts (for example blinds, curtains and poles).",
      "It is your responsibility to apply a final finish to any woodwork used in the installation unless specified on the contract for us to finish. We shall be under no liability for redecoration unless damage to decoration is caused by our negligence or unprofessional workmanship.",
      "We shall be under no liability to make good any existing damage or latent defects to brickwork, plasterwork, pebble dash, rendering or similar materials. All redecoration including replacement of tiles is your sole responsibility, except where damage was caused by us not exercising reasonable care and skill.",
      "We will not accept liability for damage to telephone cables, burglar alarm fittings, aerial cables or similar on installation. The responsibility for disconnection of such fittings and cables lies with you.",
      "No undertaking can be given that your existing doors, windows and/or frames can be removed so as to be reused; they will be removed from site and disposed of unless you instruct the installers to leave them.",
      "We cannot ensure that existing blinds will refit unaltered after the installation of replacement windows and doors.",
      "We will not be responsible for moving furniture or other items that may restrict the installation; this must be carried out prior to installation.",
    ],
  },
  {
    title: "7. Quality, description and guarantee",
    paragraphs: [
      "We guarantee to repair where we deem it practicable and appropriate, and if not, to replace free of charge for materials, any product including any insulating glass unit which develops a fault (which has been correctly maintained), including condensation between the panes due to defective materials or workmanship, within 5 years of the date of installation. You must notify us of any claim under this guarantee within 7 days of discovery of the fault.",
      "The guarantee is only effective once full payment has been made.",
      "Despite the fact that your statutory rights remain unaffected, this guarantee does not extend to: damage due to misuse, neglect or lack of maintenance by you, or from causes beyond our control (for example fire, flooding, civil disturbance, criminal acts, third-party damage or acts of nature); any works carried out by others associated with this installation; shattered toughened units or cracked glass outside the Glass and Glazing Federation visual-quality criteria; damage to door seals, drip bars, drip caps, letterboxes, or keys snapped in locking mechanisms.",
      "All float glass has an inherent degree of variability in visual characteristics. Our double-glazing units will meet Glass and Glazing Federation standards for visual quality and cannot be rejected based on any other standard. Toughened glass units, by their nature, have inconsistent reflective qualities and cannot be rejected on such grounds. Low-emissivity and gas-filled units may be prone to external condensation in certain climatic conditions and may not be rejected for this reason.",
      "If the product is obsolete, a product of equivalent specification will be supplied. The guarantee does not apply to surface finishes where failure is caused by negligence, vandalism, wilful damage, environmental conditions or excessive wear and tear.",
    ],
  },
  {
    title: "8. Service calls under guarantee",
    paragraphs: [
      `We will use our best endeavours to attend any reasonable service call made by email to ${company.email} or via WhatsApp on ${company.phoneDisplay}. If following inspection your complaint is reasonable, it will be remedied in the best practicable manner at no expense to you. If your complaint is considered unreasonable (for example where the alleged fault is due to neglect or misuse), we reserve the right to charge an administration fee and the cost of time and materials for each visit.`,
      "Service calls will be attended when weather appropriate. We will not be liable for any loss of income or revenue as a result of service work.",
      "The unexpired portion of the relevant guarantee can be assigned to new owners of the property if notified to us in writing within 1 month of their purchasing the property and any registration fee is paid. Before agreeing to an assignment we may carry out an inspection.",
    ],
  },
  {
    title: "9. General",
    paragraphs: [
      "Nothing in these conditions will reduce your statutory rights relating to faulty or misdescribed goods and services. For further information about your statutory rights contact your Local Authority Trading Standards Department or Citizens Advice Bureau.",
      "We may at any time assign, charge, subcontract or deal in any other manner with any or all of our rights and obligations under the Contract. You shall not assign your rights or obligations without our prior written consent.",
      "The contract constitutes the entire agreement between us and supersedes all previous agreements, promises, assurances, warranties, representations and understandings relating to its subject matter.",
      "Except as set out in the contract, no variation shall be effective unless it is in writing and signed by the parties (or authorised representatives).",
      "If any provision of the contract is or becomes invalid, illegal or unenforceable, it shall be deemed deleted, but that shall not affect the validity and enforceability of the rest of the contract.",
      "Unless it expressly states otherwise, the contract does not give rise to any rights under the Contract (Third Party Rights) (Scotland) Act 2017 for any third party to enforce any term of the contract.",
    ],
  },
  {
    title: "10. Governing law and jurisdiction",
    paragraphs: [
      "The contract, and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with it or its subject matter or formation, shall be governed by and construed in accordance with the law of Scotland.",
      "Each party irrevocably agrees that the Scottish courts shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with this contract or its subject matter or formation.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white pt-28 md:pt-32">
        <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-origin uppercase">
            Legal
          </p>
          <h1 className="mt-4 font-display-italic text-4xl text-black md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-muted-foreground">
            These terms apply to contracts with {company.name} for the supply and
            installation of windows, doors, and related home improvements across
            Scotland. Last updated{" "}
            {new Date().toLocaleDateString("en-GB", {
              month: "long",
              year: "numeric",
            })}
            .
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl text-black md:text-2xl">
                  {section.title}
                </h2>
                {section.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="mt-3 leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-14 space-y-3 border-t border-border pt-8 text-sm text-muted-foreground">
            <p>
              Contact: WhatsApp / call{" "}
              <a href={`tel:${company.phoneTel}`} className="text-origin hover:underline">
                {company.phoneDisplay}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${company.email}`} className="text-origin hover:underline">
                {company.email}
              </a>
            </p>
            <p>
              <Link href="/" className="origin-link">
                ← Back to home
              </Link>
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
