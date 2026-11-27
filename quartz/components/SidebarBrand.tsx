import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// "Back to RPG Sidebar" brand link at the top of the sidebar.
// When the logo is ready, save it as quartz/static/rpgsidebar-logo.png and set SHOW_LOGO to true.
const SHOW_LOGO = false
const MAIN_SITE = "https://rpgsidebar.com"

const SidebarBrand: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const depth = (fileData.slug ?? "").split("/").length - 1
  const root = depth > 0 ? "../".repeat(depth) : "./"
  return (
    <a class={classNames(displayClass, "sidebar-brand")} href={MAIN_SITE}>
      {SHOW_LOGO ? (
        <img src={`${root}static/rpgsidebar-logo.png`} alt="RPG Sidebar" />
      ) : (
        <span class="brand-mark">RPG Sidebar</span>
      )}
      <span class="brand-back">← Back to the main site</span>
    </a>
  )
}

SidebarBrand.css = `
.sidebar-brand {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--tertiary);
  text-decoration: none;
  background: none !important;
}
.sidebar-brand img { max-width: 160px; height: auto; }
.sidebar-brand .brand-mark {
  font-family: var(--headerFont);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: var(--secondary);
}
.sidebar-brand .brand-back { font-size: 0.8rem; color: var(--gray); }
.sidebar-brand:hover .brand-back { color: var(--secondary); }
`

export default (() => SidebarBrand) satisfies QuartzComponentConstructor
