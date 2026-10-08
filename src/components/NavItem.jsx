export default function NavItem(props) {
  const { name, className, ...itemProps } = props
  const target = `#${name}`
  return (
    <li {...itemProps}>
      <a href={target} className={`${className} block capitalize`}>
        {name}
      </a>
    </li>
  )
}
