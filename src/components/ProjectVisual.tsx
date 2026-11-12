import React from 'react';
import { SchematicType } from '../types';

interface ProjectVisualProps {
  id?: string;
  imageUrl?: string;
  logoUrl?: string;
  title: string;
  category: string;
  schematicType?: SchematicType;
  status?: string;
  aspectClass?: string;
  hideLogoBadge?: boolean;
  className?: string;
}

/**
 * Generates a domain-specific editorial interface composition SVG data-URI
 * tailored to each venture, product, studio, or design exploration.
 */
export function buildMockupThumbnailDataUri(
  title: string,
  category: string,
  schematicType?: SchematicType
): string {
  const safeTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeCat = category.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  let innerGraphic = '';

  switch (schematicType) {
    case 'marketplace-rwanda':
      // GuraRwanda — Made in Rwanda Digital Marketplace UI
      innerGraphic = `
        <rect x="70" y="128" width="165" height="232" rx="12" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <text x="90" y="156" fill="#a1a1aa" font-family="sans-serif" font-size="10" font-weight="700">MADE IN RWANDA</text>
        <rect x="90" y="172" width="125" height="26" rx="6" fill="#27272a"/>
        <text x="102" y="189" fill="#f4f4f5" font-family="sans-serif" font-size="10" font-weight="700">Artisans &amp; Crafts</text>
        <rect x="90" y="206" width="125" height="26" rx="6" fill="#1c1c20"/>
        <text x="102" y="223" fill="#a1a1aa" font-family="sans-serif" font-size="10" font-weight="600">Coffee &amp; Roasters</text>
        <rect x="90" y="240" width="125" height="26" rx="6" fill="#1c1c20"/>
        <text x="102" y="257" fill="#a1a1aa" font-family="sans-serif" font-size="10" font-weight="600">Textiles &amp; Apparel</text>
        <rect x="90" y="286" width="125" height="54" rx="8" fill="#1c1c20" stroke="#3f3f46"/>
        <text x="102" y="308" fill="#e4e4e7" font-family="sans-serif" font-size="10" font-weight="700">Kigali → Global</text>
        <text x="102" y="325" fill="#71717a" font-family="sans-serif" font-size="9" font-weight="600">Verified Producers</text>

        <rect x="252" y="128" width="230" height="232" rx="12" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <rect x="270" y="146" width="194" height="112" rx="8" fill="#1e1e22" stroke="#3f3f46"/>
        <path d="M295 232 L335 182 L375 215 L410 172 L440 232 Z" fill="#27272a" stroke="#a1a1aa" stroke-width="1.5"/>
        <rect x="270" y="274" width="120" height="12" rx="6" fill="#f4f4f5"/>
        <rect x="270" y="294" width="85" height="8" rx="4" fill="#71717a"/>
        <rect x="270" y="316" width="90" height="26" rx="6" fill="#e4e4e7"/>
        <rect x="370" y="316" width="94" height="26" rx="6" fill="#27272a"/>

        <rect x="498" y="128" width="232" height="232" rx="12" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <rect x="516" y="146" width="196" height="90" rx="8" fill="#1c1c20"/>
        <text x="532" y="172" fill="#a1a1aa" font-family="sans-serif" font-size="10" font-weight="700">MERCHANT FULFILLMENT</text>
        <path d="M532 214 L575 196 L620 204 L665 180 L692 186" stroke="#f4f4f5" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <rect x="516" y="250" width="196" height="42" rx="8" fill="#1c1c20" stroke="#3f3f46"/>
        <circle cx="536" cy="271" r="6" fill="#e4e4e7"/>
        <rect x="552" y="266" width="110" height="10" rx="5" fill="#d4d4d8"/>
        <rect x="516" y="302" width="196" height="42" rx="8" fill="#1c1c20"/>
        <circle cx="536" cy="323" r="6" fill="#71717a"/>
        <rect x="552" y="318" width="95" height="10" rx="5" fill="#a1a1aa"/>
      `;
      break;

    case 'wellbeing-ai':
      // Mwizerwa — AI Wellbeing & Emotional Companion UI
      innerGraphic = `
        <rect x="70" y="128" width="415" height="232" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <rect x="94" y="152" width="250" height="44" rx="12" fill="#1e1e22" stroke="#3f3f46"/>
        <circle cx="116" cy="174" r="8" fill="#e4e4e7"/>
        <rect x="134" y="166" width="160" height="8" rx="4" fill="#f4f4f5"/>
        <rect x="134" y="180" width="110" height="6" rx="3" fill="#a1a1aa"/>

        <rect x="180" y="210" width="280" height="50" rx="12" fill="#27272a"/>
        <rect x="200" y="226" width="210" height="8" rx="4" fill="#f4f4f5"/>
        <rect x="200" y="242" width="150" height="6" rx="3" fill="#a1a1aa"/>

        <rect x="94" y="274" width="366" height="64" rx="12" fill="#19191d" stroke="#52525b"/>
        <text x="114" y="298" fill="#f4f4f5" font-family="sans-serif" font-size="11" font-weight="700">Guided Reflection &amp; Next Step</text>
        <rect x="114" y="310" width="240" height="8" rx="4" fill="#a1a1aa"/>
        <rect x="378" y="294" width="64" height="26" rx="6" fill="#e4e4e7"/>

        <rect x="502" y="128" width="228" height="232" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <text x="524" y="158" fill="#a1a1aa" font-family="sans-serif" font-size="10" font-weight="700">CLARITY &amp; CALM INDEX</text>
        <circle cx="616" cy="222" r="46" fill="none" stroke="#27272a" stroke-width="8"/>
        <circle cx="616" cy="222" r="46" fill="none" stroke="#e4e4e7" stroke-width="8" stroke-dasharray="210 80" stroke-linecap="round"/>
        <text x="616" y="227" fill="#f4f4f5" font-family="sans-serif" font-size="14" font-weight="700" text-anchor="middle">BALANCED</text>
        <rect x="526" y="292" width="180" height="44" rx="8" fill="#1c1c20"/>
        <rect x="544" y="310" width="144" height="8" rx="4" fill="#a1a1aa"/>
      `;
      break;

    case 'inbox-agent':
      // Sift — AI Email Assistant & Priority Inbox Triage
      innerGraphic = `
        <rect x="70" y="128" width="205" height="232" rx="12" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <text x="90" y="156" fill="#a1a1aa" font-family="sans-serif" font-size="10" font-weight="700">SIFT AI TRIAGE</text>
        <rect x="90" y="172" width="165" height="46" rx="8" fill="#27272a" stroke="#71717a"/>
        <text x="104" y="193" fill="#f4f4f5" font-family="sans-serif" font-size="11" font-weight="700">Priority Focus (4)</text>
        <text x="104" y="208" fill="#a1a1aa" font-family="sans-serif" font-size="9" font-weight="600">Action required today</text>
        <rect x="90" y="230" width="165" height="46" rx="8" fill="#1c1c20"/>
        <text x="104" y="251" fill="#d4d4d8" font-family="sans-serif" font-size="11" font-weight="700">Auto-Archived (142)</text>
        <text x="104" y="266" fill="#71717a" font-family="sans-serif" font-size="9" font-weight="600">Low-priority &amp; noise</text>
        <rect x="90" y="288" width="165" height="50" rx="8" fill="#1c1c20"/>
        <text x="104" y="311" fill="#e4e4e7" font-family="sans-serif" font-size="10" font-weight="700">✓ Zero Inbox Clutter</text>

        <rect x="292" y="128" width="438" height="232" rx="12" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <rect x="314" y="150" width="394" height="54" rx="10" fill="#1e1e22" stroke="#52525b"/>
        <circle cx="338" cy="177" r="7" fill="#f4f4f5"/>
        <rect x="356" y="168" width="190" height="10" rx="5" fill="#f4f4f5"/>
        <rect x="356" y="184" width="130" height="7" rx="3.5" fill="#a1a1aa"/>
        <rect x="618" y="165" width="74" height="24" rx="6" fill="#e4e4e7"/>

        <rect x="314" y="216" width="394" height="54" rx="10" fill="#18181b"/>
        <circle cx="338" cy="243" r="7" fill="#71717a"/>
        <rect x="356" y="234" width="215" height="10" rx="5" fill="#d4d4d8"/>
        <rect x="356" y="250" width="145" height="7" rx="3.5" fill="#71717a"/>
        <rect x="618" y="231" width="74" height="24" rx="6" fill="#27272a"/>

        <rect x="314" y="282" width="394" height="54" rx="10" fill="#18181b" opacity="0.65"/>
        <circle cx="338" cy="309" r="7" fill="#52525b"/>
        <rect x="356" y="300" width="175" height="10" rx="5" fill="#a1a1aa"/>
        <rect x="618" y="297" width="74" height="24" rx="6" fill="#27272a"/>
      `;
      break;

    case 'visual-cms':
      // Kiln — Stack-Agnostic Visual CMS & Live Block Editor
      innerGraphic = `
        <rect x="70" y="128" width="155" height="232" rx="12" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <text x="88" y="154" fill="#a1a1aa" font-family="sans-serif" font-size="10" font-weight="700">DOM TREE</text>
        <rect x="88" y="168" width="118" height="24" rx="6" fill="#27272a"/>
        <rect x="98" y="198" width="108" height="24" rx="6" fill="#1c1c20" stroke="#71717a"/>
        <rect x="108" y="228" width="98" height="24" rx="6" fill="#1c1c20"/>
        <rect x="98" y="258" width="108" height="24" rx="6" fill="#1c1c20"/>
        <rect x="88" y="298" width="118" height="42" rx="8" fill="#1c1c20"/>

        <rect x="240" y="128" width="310" height="232" rx="12" fill="#141416" stroke="#52525b" stroke-width="1.5"/>
        <rect x="260" y="148" width="270" height="84" rx="8" fill="#1e1e22" stroke="#e4e4e7" stroke-dasharray="5 3"/>
        <rect x="278" y="166" width="170" height="14" rx="6" fill="#f4f4f5"/>
        <rect x="278" y="188" width="220" height="8" rx="4" fill="#a1a1aa"/>
        <rect x="278" y="204" width="120" height="8" rx="4" fill="#71717a"/>
        <rect x="260" y="246" width="128" height="94" rx="8" fill="#1c1c20"/>
        <rect x="402" y="246" width="128" height="94" rx="8" fill="#1c1c20"/>

        <rect x="565" y="128" width="165" height="232" rx="12" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <text x="583" y="154" fill="#a1a1aa" font-family="sans-serif" font-size="10" font-weight="700">VISUAL PROPS</text>
        <rect x="583" y="170" width="128" height="32" rx="6" fill="#1c1c20"/>
        <rect x="583" y="212" width="128" height="32" rx="6" fill="#1c1c20"/>
        <rect x="583" y="254" width="128" height="32" rx="6" fill="#1c1c20"/>
        <rect x="583" y="304" width="128" height="36" rx="8" fill="#e4e4e7"/>
        <text x="647" y="326" fill="#0d0d0f" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">PUBLISH LIVE</text>
      `;
      break;

    case 'studio-lintel':
      // Lintel — Product Development Studio
      innerGraphic = `
        <rect x="70" y="128" width="660" height="232" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <text x="102" y="172" fill="#71717a" font-family="sans-serif" font-size="11" font-weight="700" letter-spacing="2">STUDIO 01 · LINTEL PRODUCT ARCHITECTURE</text>
        <text x="102" y="218" fill="#f4f4f5" font-family="sans-serif" font-size="34" font-weight="800">LINTEL STUDIO</text>
        <text x="102" y="246" fill="#a1a1aa" font-family="sans-serif" font-size="13" font-weight="600">MVPs · Multi-Tenant SaaS · Product Design &amp; Engineering</text>
        <rect x="102" y="274" width="180" height="54" rx="10" fill="#1c1c20" stroke="#3f3f46"/>
        <text x="122" y="298" fill="#f4f4f5" font-family="sans-serif" font-size="11" font-weight="700">01 · Product Strategy</text>
        <text x="122" y="314" fill="#71717a" font-family="sans-serif" font-size="10">Scope &amp; Validation</text>
        <rect x="298" y="274" width="180" height="54" rx="10" fill="#1c1c20" stroke="#3f3f46"/>
        <text x="318" y="298" fill="#f4f4f5" font-family="sans-serif" font-size="11" font-weight="700">02 · Interface Systems</text>
        <text x="318" y="314" fill="#71717a" font-family="sans-serif" font-size="10">Figma &amp; Design Tokens</text>
        <rect x="494" y="274" width="204" height="54" rx="10" fill="#27272a" stroke="#a1a1aa"/>
        <text x="514" y="298" fill="#f4f4f5" font-family="sans-serif" font-size="11" font-weight="700">03 · Production Launch</text>
        <text x="514" y="314" fill="#d4d4d8" font-family="sans-serif" font-size="10">Scalable Full-Stack Code</text>
      `;
      break;

    case 'studio-rapix':
      // Rapix — Software Development Agency
      innerGraphic = `
        <rect x="70" y="128" width="660" height="232" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <text x="102" y="172" fill="#71717a" font-family="sans-serif" font-size="11" font-weight="700" letter-spacing="2">STUDIO 02 · RAPIX SOFTWARE AGENCY</text>
        <text x="102" y="218" fill="#f4f4f5" font-family="sans-serif" font-size="34" font-weight="800">RAPIX</text>
        <text x="102" y="246" fill="#a1a1aa" font-family="sans-serif" font-size="13" font-weight="600">Rapid MVP Execution · SaaS Engineering · Business Systems</text>
        <rect x="102" y="274" width="596" height="54" rx="10" fill="#1c1c20" stroke="#3f3f46"/>
        <circle cx="134" cy="301" r="8" fill="#e4e4e7"/>
        <text x="154" y="305" fill="#f4f4f5" font-family="sans-serif" font-size="12" font-weight="700">Architecture → Sprint Delivery → API Integration → Cloud Deployment</text>
      `;
      break;

    case 'studio-wattfor':
      // Wattfor — Industry-Focused Digital Solutions
      innerGraphic = `
        <rect x="70" y="128" width="660" height="232" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <text x="102" y="172" fill="#71717a" font-family="sans-serif" font-size="11" font-weight="700" letter-spacing="2">STUDIO 03 · WATTFOR INDUSTRY SOLUTIONS</text>
        <text x="102" y="218" fill="#f4f4f5" font-family="sans-serif" font-size="34" font-weight="800">WATTFOR</text>
        <text x="102" y="246" fill="#a1a1aa" font-family="sans-serif" font-size="13" font-weight="600">Sector-Specific Websites · Tailored Industry Platforms</text>
        <rect x="102" y="274" width="140" height="54" rx="10" fill="#1c1c20" stroke="#3f3f46"/>
        <text x="172" y="306" fill="#f4f4f5" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">Hospitality</text>
        <rect x="254" y="274" width="140" height="54" rx="10" fill="#1c1c20" stroke="#3f3f46"/>
        <text x="324" y="306" fill="#f4f4f5" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">Real Estate</text>
        <rect x="406" y="274" width="140" height="54" rx="10" fill="#1c1c20" stroke="#3f3f46"/>
        <text x="476" y="306" fill="#f4f4f5" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">Healthcare</text>
        <rect x="558" y="274" width="140" height="54" rx="10" fill="#27272a" stroke="#a1a1aa"/>
        <text x="628" y="306" fill="#f4f4f5" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">Enterprise</text>
      `;
      break;

    case 'feedback-pipeline':
      innerGraphic = `
        <rect x="70" y="135" width="190" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <rect x="90" y="160" width="90" height="10" rx="5" fill="#e4e4e7"/>
        <rect x="90" y="185" width="150" height="8" rx="4" fill="#3f3f46"/>
        <rect x="90" y="205" width="130" height="8" rx="4" fill="#3f3f46"/>
        <rect x="90" y="240" width="150" height="42" rx="8" fill="#1c1c20" stroke="#52525b" stroke-width="1"/>
        <rect x="285" y="135" width="210" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <circle cx="335" cy="195" r="28" fill="none" stroke="#e4e4e7" stroke-width="6"/>
        <rect x="380" y="175" width="90" height="12" rx="6" fill="#f4f4f5"/>
        <rect x="380" y="198" width="65" height="8" rx="4" fill="#71717a"/>
        <rect x="305" y="245" width="170" height="85" rx="10" fill="#1c1c20"/>
        <path d="M325 305 L360 280 L395 292 L445 262" stroke="#e4e4e7" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <rect x="520" y="135" width="210" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <rect x="542" y="162" width="165" height="36" rx="8" fill="#27272a" stroke="#71717a"/>
        <rect x="542" y="212" width="165" height="36" rx="8" fill="#1c1c20"/>
        <rect x="542" y="262" width="165" height="36" rx="8" fill="#1c1c20"/>
      `;
      break;

    case 'lead-recovery':
      innerGraphic = `
        <rect x="70" y="135" width="660" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <rect x="95" y="162" width="190" height="165" rx="10" fill="#1c1c20" stroke="#2a2a2e"/>
        <rect x="112" y="182" width="80" height="10" rx="5" fill="#e4e4e7"/>
        <rect x="112" y="206" width="155" height="44" rx="8" fill="#141416"/>
        <rect x="112" y="260" width="155" height="44" rx="8" fill="#141416"/>
        <rect x="305" y="162" width="190" height="165" rx="10" fill="#1c1c20" stroke="#2a2a2e"/>
        <rect x="322" y="182" width="95" height="10" rx="5" fill="#a1a1aa"/>
        <rect x="322" y="206" width="155" height="44" rx="8" fill="#141416"/>
        <rect x="322" y="260" width="155" height="44" rx="8" fill="#141416"/>
        <rect x="515" y="162" width="190" height="165" rx="10" fill="#1c1c20" stroke="#71717a" stroke-width="1.5"/>
        <rect x="532" y="182" width="105" height="10" rx="5" fill="#f4f4f5"/>
        <rect x="532" y="206" width="155" height="98" rx="8" fill="#27272a"/>
      `;
      break;

    case 'community-consensus':
      innerGraphic = `
        <rect x="70" y="135" width="420" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <rect x="95" y="162" width="120" height="12" rx="6" fill="#f4f4f5"/>
        <rect x="95" y="188" width="360" height="10" rx="5" fill="#d4d4d8"/>
        <rect x="95" y="212" width="290" height="8" rx="4" fill="#71717a"/>
        <rect x="95" y="255" width="370" height="14" rx="7" fill="#27272a"/>
        <rect x="95" y="255" width="275" height="14" rx="7" fill="#e4e4e7"/>
        <rect x="95" y="290" width="110" height="36" rx="8" fill="#e4e4e7"/>
        <rect x="220" y="290" width="110" height="36" rx="8" fill="#27272a"/>
        <rect x="510" y="135" width="220" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <circle cx="620" cy="220" r="46" fill="none" stroke="#e4e4e7" stroke-width="8" stroke-dasharray="220 60"/>
        <rect x="565" y="295" width="110" height="10" rx="5" fill="#a1a1aa"/>
      `;
      break;

    case 'gallery-fintech':
      innerGraphic = `
        <rect x="70" y="128" width="210" height="232" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <text x="92" y="158" fill="#a1a1aa" font-family="sans-serif" font-size="10" font-weight="700">TREASURY BALANCE</text>
        <text x="92" y="190" fill="#f4f4f5" font-family="sans-serif" font-size="24" font-weight="800">$148,920.00</text>
        <rect x="92" y="214" width="166" height="54" rx="8" fill="#1c1c20" stroke="#3f3f46"/>
        <rect x="92" y="280" width="166" height="58" rx="8" fill="#27272a"/>
        <rect x="296" y="128" width="434" height="232" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <path d="M326 298 L385 245 L440 262 L515 190 L585 212 L660 158 L700 166" stroke="#f4f4f5" stroke-width="3" fill="none" stroke-linecap="round"/>
        <rect x="326" y="316" width="374" height="22" rx="6" fill="#1c1c20"/>
      `;
      break;

    case 'gallery-editorial':
      innerGraphic = `
        <rect x="70" y="128" width="660" height="232" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <text x="102" y="176" fill="#71717a" font-family="sans-serif" font-size="10" font-weight="700" letter-spacing="2">EDITORIAL TYPE &amp; GRID SYSTEM</text>
        <text x="102" y="226" fill="#f4f4f5" font-family="sans-serif" font-size="38" font-weight="800">Precision &amp; Rhythm.</text>
        <rect x="102" y="252" width="280" height="8" rx="4" fill="#a1a1aa"/>
        <rect x="102" y="270" width="220" height="8" rx="4" fill="#71717a"/>
        <rect x="102" y="300" width="120" height="34" rx="8" fill="#e4e4e7"/>
        <rect x="440" y="152" width="260" height="184" rx="10" fill="#1c1c20" stroke="#3f3f46"/>
        <circle cx="570" cy="244" r="48" fill="none" stroke="#a1a1aa" stroke-width="2"/>
      `;
      break;

    case 'gallery-command':
      innerGraphic = `
        <rect x="150" y="132" width="500" height="224" rx="16" fill="#141416" stroke="#52525b" stroke-width="1.5"/>
        <rect x="174" y="154" width="452" height="40" rx="8" fill="#1c1c20" stroke="#3f3f46"/>
        <text x="196" y="179" fill="#f4f4f5" font-family="sans-serif" font-size="12" font-weight="700">⌘K · Search commands, workflows, or deployments...</text>
        <rect x="174" y="208" width="452" height="38" rx="8" fill="#27272a"/>
        <text x="196" y="231" fill="#f4f4f5" font-family="sans-serif" font-size="11" font-weight="700">→ Deploy Production Release</text>
        <rect x="174" y="254" width="452" height="38" rx="8" fill="#18181b"/>
        <text x="196" y="277" fill="#a1a1aa" font-family="sans-serif" font-size="11" font-weight="600">Inspect Design Tokens &amp; Typography</text>
        <rect x="174" y="300" width="452" height="38" rx="8" fill="#18181b"/>
        <text x="196" y="323" fill="#a1a1aa" font-family="sans-serif" font-size="11" font-weight="600">Switch Workspace Environment</text>
      `;
      break;

    case 'gallery-autonomi':
      // Autonomi Mobility Platform — Dark Mode Operations Console (Matching Photo 1)
      innerGraphic = `
        <rect x="70" y="128" width="660" height="232" rx="14" fill="#0d0d10" stroke="#222226" stroke-width="1.5"/>
        <rect x="92" y="148" width="180" height="192" rx="10" fill="#141418" stroke="#27272a"/>
        <circle cx="182" cy="205" r="38" fill="#1c1c22" stroke="#3f3f46"/>
        <rect x="114" y="260" width="136" height="24" rx="6" fill="#27272a"/>
        <text x="182" y="276" fill="#e4e4e7" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle">FLEET ACTIVE</text>
        
        <rect x="290" y="148" width="418" height="192" rx="10" fill="#141418" stroke="#27272a"/>
        <text x="312" y="176" fill="#a1a1aa" font-family="sans-serif" font-size="11" font-weight="700">FLEET TELEMETRY &amp; REAL-TIME EFFICIENCY</text>
        <path d="M312 265 L360 230 L400 248 L460 195 L520 225 L580 180 L640 210 L680 170" stroke="#22c55e" stroke-width="3" fill="none" stroke-linecap="round"/>
        <rect x="312" y="295" width="85" height="26" rx="6" fill="#222226"/>
        <rect x="410" y="295" width="85" height="26" rx="6" fill="#222226"/>
        <rect x="508" y="295" width="85" height="26" rx="6" fill="#222226"/>
        <rect x="606" y="295" width="85" height="26" rx="6" fill="#222226"/>
      `;
      break;

    case 'gallery-analytics':
      // Hano SaaS Analytics Dashboard — Light Mode (Matching Photo 1)
      innerGraphic = `
        <rect x="70" y="128" width="660" height="232" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
        <rect x="92" y="148" width="130" height="192" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
        <rect x="108" y="166" width="98" height="14" rx="4" fill="#0284c7"/>
        <rect x="108" y="190" width="98" height="10" rx="3" fill="#e2e8f0"/>
        <rect x="108" y="208" width="78" height="10" rx="3" fill="#e2e8f0"/>
        <rect x="108" y="235" width="98" height="30" rx="6" fill="#f1f5f9"/>
        <rect x="108" y="275" width="98" height="48" rx="6" fill="#f1f5f9"/>

        <rect x="238" y="148" width="470" height="192" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
        <rect x="258" y="164" width="95" height="28" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <rect x="365" y="164" width="95" height="28" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <rect x="472" y="164" width="95" height="28" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        
        {/* Analytics Bar Chart Columns */}
        <rect x="270" y="245" width="18" height="70" rx="4" fill="#0f172a"/>
        <rect x="305" y="225" width="18" height="90" rx="4" fill="#0f172a"/>
        <rect x="340" y="260" width="18" height="55" rx="4" fill="#0f172a"/>
        <rect x="375" y="215" width="18" height="100" rx="4" fill="#0f172a"/>
        <rect x="410" y="235" width="18" height="80" rx="4" fill="#0f172a"/>
        <rect x="445" y="250" width="18" height="65" rx="4" fill="#0f172a"/>
        <rect x="480" y="220" width="18" height="95" rx="4" fill="#0f172a"/>
        <rect x="515" y="240" width="18" height="75" rx="4" fill="#0f172a"/>

        <rect x="560" y="210" width="128" height="105" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
      `;
      break;

    case 'gallery-mobile-app':
      // Areports Mobile App — 3 Smartphones Side-by-Side (Matching Photo 1)
      innerGraphic = `
        {/* Smartphone 1 (Left) */}
        <rect x="150" y="132" width="145" height="225" rx="24" fill="#ffffff" stroke="#18181b" stroke-width="5"/>
        <rect x="195" y="138" width="55" height="10" rx="5" fill="#18181b"/>
        <rect x="165" y="160" width="115" height="34" rx="6" fill="#f1f5f9"/>
        <rect x="175" y="172" width="40" height="14" rx="3" fill="#3b82f6"/>
        <rect x="220" y="172" width="40" height="14" rx="3" fill="#f59e0b"/>
        <rect x="165" y="205" width="115" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
        <rect x="175" y="250" width="12" height="40" rx="3" fill="#1e293b"/>
        <rect x="195" y="235" width="12" height="55" rx="3" fill="#1e293b"/>
        <rect x="215" y="245" width="12" height="45" rx="3" fill="#1e293b"/>
        <rect x="235" y="225" width="12" height="65" rx="3" fill="#3b82f6"/>
        <rect x="255" y="240" width="12" height="50" rx="3" fill="#1e293b"/>

        {/* Smartphone 2 (Center) */}
        <rect x="325" y="132" width="145" height="225" rx="24" fill="#ffffff" stroke="#18181b" stroke-width="5"/>
        <rect x="370" y="138" width="55" height="10" rx="5" fill="#18181b"/>
        <rect x="340" y="160" width="54" height="36" rx="6" fill="#f1f5f9"/>
        <rect x="402" y="160" width="54" height="36" rx="6" fill="#f1f5f9"/>
        <rect x="340" y="206" width="116" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
        <path d="M355 255 L380 235 L405 245 L435 220" stroke="#3b82f6" stroke-width="3" fill="none"/>
        <rect x="340" y="286" width="116" height="35" rx="6" fill="#f1f5f9"/>

        {/* Smartphone 3 (Right) */}
        <rect x="500" y="132" width="145" height="225" rx="24" fill="#ffffff" stroke="#18181b" stroke-width="5"/>
        <rect x="545" y="138" width="55" height="10" rx="5" fill="#18181b"/>
        <rect x="515" y="160" width="115" height="30" rx="6" fill="#f1f5f9"/>
        <rect x="520" y="168" width="45" height="14" rx="4" fill="#4f46e5"/>
        <rect x="515" y="200" width="115" height="115" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
        <rect x="525" y="215" width="95" height="18" rx="4" fill="#e2e8f0"/>
        <rect x="525" y="240" width="95" height="18" rx="4" fill="#e2e8f0"/>
        <rect x="525" y="265" width="95" height="18" rx="4" fill="#e2e8f0"/>
      `;
      break;

    case 'stretch-cloud':
      // Stretch Cloud — African Cloud Hosting Platform (Matching Photo 2)
      innerGraphic = `
        <rect x="70" y="128" width="660" height="232" rx="14" fill="#1e1136" stroke="#4c1d95" stroke-width="1.5"/>
        <rect x="90" y="146" width="620" height="196" rx="10" fill="#110724"/>
        {/* Top Navbar */}
        <rect x="90" y="146" width="620" height="30" rx="10" fill="#1c0b3b"/>
        <text x="110" y="166" fill="#a78bfa" font-family="sans-serif" font-size="11" font-weight="700">PRICING</text>
        <text x="175" y="166" fill="#7c3aed" font-family="sans-serif" font-size="11" font-weight="700">BLOG</text>
        <text x="225" y="166" fill="#7c3aed" font-family="sans-serif" font-size="11" font-weight="700">DOCS</text>
        
        {/* Hero Content */}
        <text x="110" y="215" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="800">You Could Scale</text>
        <text x="110" y="242" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="800">Africa At Low Cost</text>
        <text x="110" y="268" fill="#c4b5fd" font-family="sans-serif" font-size="9" font-weight="500">Stretch Cloud is an African, budget-friendly DigitalOcean alternative</text>
        <text x="110" y="280" fill="#c4b5fd" font-family="sans-serif" font-size="9" font-weight="500">leveraging secure local data centers with payment in local currency.</text>
        
        {/* CTA Button */}
        <rect x="110" y="296" width="105" height="28" rx="6" fill="#6d28d9"/>
        <text x="162" y="314" fill="#ffffff" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle">GET STARTED</text>
      `;
      break;

    case 'rp-eportfolio':
      // RP E-portfolio — Rwanda Polytechnic Student Showcase (Matching Photo 2)
      innerGraphic = `
        <rect x="70" y="128" width="660" height="232" rx="14" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
        <rect x="90" y="146" width="620" height="196" rx="10" fill="#ffffff"/>
        {/* Top Navbar */}
        <rect x="90" y="146" width="620" height="30" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="110" y="166" fill="#0369a1" font-family="sans-serif" font-size="12" font-weight="800">e-portfolio</text>
        <text x="320" y="166" fill="#0f172a" font-family="sans-serif" font-size="10" font-weight="700">Home</text>
        <text x="375" y="166" fill="#64748b" font-family="sans-serif" font-size="10" font-weight="500">Projects</text>
        <text x="435" y="166" fill="#64748b" font-family="sans-serif" font-size="10" font-weight="500">Portfolios</text>
        <text x="500" y="166" fill="#64748b" font-family="sans-serif" font-size="10" font-weight="500">Job Board</text>

        {/* Hero Section */}
        <text x="400" y="210" fill="#1e3a8a" font-family="sans-serif" font-size="18" font-weight="800" text-anchor="middle">Discover Rwanda's Next Innovators</text>
        <text x="400" y="230" fill="#1e3a8a" font-family="sans-serif" font-size="18" font-weight="800" text-anchor="middle">from Rwanda Polytechnic</text>
        <text x="400" y="250" fill="#64748b" font-family="sans-serif" font-size="9" font-weight="500" text-anchor="middle">Explore groundbreaking student projects, research, and technical innovations</text>

        {/* CTA Button */}
        <rect x="345" y="262" width="110" height="24" rx="5" fill="#0284c7"/>
        <text x="400" y="278" fill="#ffffff" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle">Browse Projects &rarr;</text>
        
        {/* Student Project Visual Cards */}
        <rect x="130" y="295" width="110" height="38" rx="6" fill="#e2e8f0"/>
        <rect x="255" y="295" width="135" height="38" rx="6" fill="#cbd5e1"/>
        <rect x="405" y="295" width="135" height="38" rx="6" fill="#94a3b8"/>
        <rect x="555" y="295" width="110" height="38" rx="6" fill="#64748b"/>
      `;
      break;

    case 'gallery-brand-agaciro':
      // Agaciro Digital Banking Brand — Deep Blue Gradient & Brand Mark (Matching Photo 1)
      innerGraphic = `
        <defs>
          <linearGradient id="brandBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#023e8a"/>
            <stop offset="50%" stop-color="#0077b6"/>
            <stop offset="100%" stop-color="#0096c7"/>
          </linearGradient>
        </defs>
        <rect x="70" y="128" width="660" height="232" rx="14" fill="url(#brandBlueGrad)" stroke="#38bdf8" stroke-width="1.5"/>
        {/* Geometric Monogram Mark */}
        <g transform="translate(370, 195) scale(1.3)">
          <path d="M-15 -35 L-5 -35 L-5 35 L-15 35 Z" fill="#ffffff"/>
          <path d="M-5 -25 L20 -25 L20 -15 L5 -15 L18 0 L5 0 L18 15 L20 15 L20 25 L-5 25 Z" fill="#ffffff" opacity="0.95"/>
        </g>
      `;
      break;

    default:
      // PASSE / Access Control & Design Systems
      innerGraphic = `
        <rect x="70" y="135" width="310" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <rect x="100" y="165" width="250" height="130" rx="10" fill="#1c1c20" stroke="#71717a" stroke-dasharray="6 4"/>
        <circle cx="225" cy="230" r="30" fill="#27272a" stroke="#e4e4e7" stroke-width="2"/>
        <rect x="165" y="315" width="120" height="10" rx="5" fill="#e4e4e7"/>
        <rect x="405" y="135" width="325" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
        <rect x="430" y="165" width="275" height="40" rx="8" fill="#1c1c20"/>
        <circle cx="452" cy="185" r="7" fill="#e4e4e7"/>
        <rect x="472" y="180" width="140" height="10" rx="5" fill="#d4d4d8"/>
        <rect x="430" y="220" width="275" height="40" rx="8" fill="#1c1c20"/>
        <circle cx="452" cy="240" r="7" fill="#a1a1aa"/>
        <rect x="472" y="235" width="165" height="10" rx="5" fill="#d4d4d8"/>
        <rect x="430" y="275" width="275" height="40" rx="8" fill="#1c1c20"/>
        <circle cx="452" cy="295" r="7" fill="#e4e4e7"/>
        <rect x="472" y="290" width="120" height="10" rx="5" fill="#d4d4d8"/>
      `;
      break;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
    <defs>
      <linearGradient id="neutralBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#d8d7d0"/>
        <stop offset="100%" stop-color="#efefe9"/>
      </linearGradient>
      <filter id="drop" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#09090b" flood-opacity="0.22"/>
      </filter>
    </defs>
    <rect width="800" height="500" fill="url(#neutralBg)"/>
    <g filter="url(#drop)">
      <rect x="44" y="48" width="712" height="404" rx="22" fill="#0d0d0f" stroke="#27272a" stroke-width="2"/>
      <rect x="44" y="48" width="712" height="54" rx="22" fill="#16161a"/>
      <circle cx="76" cy="75" r="6" fill="#3f3f46"/>
      <circle cx="96" cy="75" r="6" fill="#3f3f46"/>
      <circle cx="116" cy="75" r="6" fill="#e4e4e7"/>
      <text x="145" y="80" fill="#f4f4f5" font-family="sans-serif" font-size="15" font-weight="700" letter-spacing="0.5">${safeTitle}</text>
      <text x="730" y="79" fill="#a1a1aa" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="end">${safeCat}</text>
      ${innerGraphic}
      <rect x="70" y="380" width="660" height="42" rx="10" fill="#16161a"/>
      <circle cx="94" cy="401" r="5" fill="#e4e4e7"/>
      <text x="112" y="405" fill="#a1a1aa" font-family="sans-serif" font-size="12" font-weight="600">INTERFACE &amp; SYSTEM ARCHITECTURE · ISHIMWE AMANI SAMUEL</text>
    </g>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const ProjectVisual: React.FC<ProjectVisualProps> = ({
  imageUrl,
  title,
  category,
  schematicType,
  status,
  aspectClass = 'aspect-16/10',
  className = '',
}) => {
  const thumbnailSrc =
    imageUrl || buildMockupThumbnailDataUri(title, category, schematicType);

  return (
    <div className={`skeuo-inset p-2 sm:p-2.5 group relative shrink-0 ${className}`}>
      {/* Thumbnail Image Container */}
      <div className={`relative ${aspectClass} rounded-xl overflow-hidden border border-border bg-surface`}>
        <img
          src={thumbnailSrc}
          alt={`${title} — ${category} interface preview`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Top-Right Status Badge */}
        {status && (
          <div className="absolute top-2.5 right-2.5 z-10 glass-pill px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-wider font-bold text-fg">
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectVisual;
