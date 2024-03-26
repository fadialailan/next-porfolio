import gettext from "@/scripts/gettext"

export default function page() {
  return (
    <>
      {gettext.gettext("This product includes software developed at")}
    </>
  )
}
