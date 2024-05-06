/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import Script from "next/script"
import NextLink from "next/link"
import { Avatar, AvatarBadge, SimpleGrid, Text } from "@chakra-ui/react"
import { FloatButton } from "antd"
import NextHead from "next/head"



export function Link_25b53a0cbedaf9bdd3a05c64ce60fdbb () {



  return (
    <RadixThemesLink asChild={true} css={{"fontSize": "0.9em", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/josearagonlaguna/`} passHref={true}>
  {`copy right 2023 - 2024 Pp Aragon Tours`}
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_6499b51736be44284c15de43340cb16c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_54815c0d8c302401900e5bae7d8a8720 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/`} passHref={true}>
  <img alt={`github`} css={{"height": "4em", "width": "auto"}} src={`/GitHub.jpeg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_790c2489572e36a9e13267ca3de84bfc () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`https://mouredev.link/python`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "em", "backgroundColor": "#171F26", "color": "#F1F2F4", "whiteSpace": "normal", "textAlign": "start", "align": "start", "alingItens": "start", "&:hover": {"backgroundColor": "#087ec4"}}} radius={`full`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Python desde cero`} css={{"width": "2em", "height": "2em", "margin": "0.9em"}} src={`/icons/worm.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "margin": "-0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em"}} direction={`column`} gap={`0`}>
  <RadixThemesText as={`p`} css={{"fontSize": "em", "fontFamily": "Poppins", "fontWeight": "900", "color": "#F1F2F4"}}>
  {`Python desde cero`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "fontFamily": "Poppins", "fontWeight": "100", "color": "#C3C7CB"}}>
  {`curos de 37h: Fundamentos, frontend, backend, testing ...`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_836876734fb2f591f67d0f7f4a802dbb () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.youtube.com/channel/UCzPoiGtg9DKxb3YpB0x5VyQ`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "em", "backgroundColor": "#171F26", "color": "#F1F2F4", "whiteSpace": "normal", "textAlign": "start", "align": "start", "alingItens": "start", "&:hover": {"backgroundColor": "#087ec4"}}} radius={`full`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`youtube canal primario`} css={{"width": "2em", "height": "2em", "margin": "0.9em"}} src={`/icons/youtube.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "margin": "-0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em"}} direction={`column`} gap={`0`}>
  <RadixThemesText as={`p`} css={{"fontSize": "em", "fontFamily": "Poppins", "fontWeight": "900", "color": "#F1F2F4"}}>
  {`youtube canal primario`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "fontFamily": "Poppins", "fontWeight": "100", "color": "#C3C7CB"}}>
  {`emprendimiento en proceso`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Link_befa7247a535bad203b57eec2b52165d () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`https://retosdeprogramacion.com`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "em", "backgroundColor": "#171F26", "color": "#F1F2F4", "whiteSpace": "normal", "textAlign": "start", "align": "start", "alingItens": "start", "&:hover": {"backgroundColor": "#087ec4"}}} radius={`full`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Retos de programaciòn`} css={{"width": "2em", "height": "2em", "margin": "0.9em"}} src={`/icons/paperclip.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "margin": "-0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em"}} direction={`column`} gap={`0`}>
  <RadixThemesText as={`p`} css={{"fontSize": "em", "fontFamily": "Poppins", "fontWeight": "900", "color": "#F1F2F4"}}>
  {`Retos de programaciòn`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "fontFamily": "Poppins", "fontWeight": "100", "color": "#C3C7CB"}}>
  {`Ruta de estudio semanal para aprebder programaciòn`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_cb5edf864ed730e6ef1545318d0da5a2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_5ca56509758f961ad7a57c6293a11d60 () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/josearagonlaguna/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "em", "backgroundColor": "#171F26", "color": "#F1F2F4", "whiteSpace": "normal", "textAlign": "start", "align": "start", "alingItens": "start", "&:hover": {"backgroundColor": "#087ec4"}}} radius={`full`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`instagram`} css={{"width": "2em", "height": "2em", "margin": "0.9em"}} src={`/icons/instagram.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "margin": "-0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em"}} direction={`column`} gap={`0`}>
  <RadixThemesText as={`p`} css={{"fontSize": "em", "fontFamily": "Poppins", "fontWeight": "900", "color": "#F1F2F4"}}>
  {`instagram`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "fontFamily": "Poppins", "fontWeight": "100", "color": "#C3C7CB"}}>
  {`seguidores fans`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_4d47b1cf8511869a83e21c0804162843 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.python.org/`} passHref={true}>
  <img alt={`Python`} css={{"height": "4em", "width": "auto"}} src={`/python_original.png`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_0132a32e919f87e3656274802d1a53e5 () {
  const state__page_state = useContext(StateContexts.state__page_state)



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": null}}>
  <NextLink href={`https://www.twitch.tv/pparagon23`} passHref={true}>
  <Avatar size={`xl`} src={`/pp.png`} sx={{"colorScheme": "sky", "variant": "solid", "highContrast": false, "fallback": "PA", "radius": "full", "padding": "-0.5em", "border": "5px solid #14A1F0"}}>
  <Fragment>
  {isTrue(state__page_state.is_live) ? (
  <Fragment>
  <AvatarBadge className={`blink`} sx={{"boxSize": "0.9em", "background": "#9146ff", "borderColor": "#9146ff"}}>
  <img src={`/icons/twitch.svg`}/>
</AvatarBadge>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</Avatar>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_137132b68e135bcfac186fd5e3098479 () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`https://mouredev.link/git`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "em", "backgroundColor": "#171F26", "color": "#F1F2F4", "whiteSpace": "normal", "textAlign": "start", "align": "start", "alingItens": "start", "&:hover": {"backgroundColor": "#087ec4"}}} radius={`full`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Git y GitHub`} css={{"width": "2em", "height": "2em", "margin": "0.9em"}} src={`/icons/github.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "margin": "-0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em"}} direction={`column`} gap={`0`}>
  <RadixThemesText as={`p`} css={{"fontSize": "em", "fontFamily": "Poppins", "fontWeight": "900", "color": "#F1F2F4"}}>
  {`Git y GitHub`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "fontFamily": "Poppins", "fontWeight": "100", "color": "#C3C7CB"}}>
  {`Curso de 5h para aprender Git y GitHub desde cero`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_e406046821f422d4c59c1e05c38a4a86 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/mouredev/python-web`} passHref={true}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img css={{"height": "1.5em", "weight": "1.5em"}} src={`/GitHub2.jpeg`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "marginTop": "-0.5em"}}>
  {`  donde la magia se vuelve real,tsn real que solo las personas mas exitosas
                    lo pueden ver y resolver
                    `}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_5d9ee91b0111bc4954a1a65174d7e1e6 () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`https://mouredev.link/sql`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "em", "backgroundColor": "#171F26", "color": "#F1F2F4", "whiteSpace": "normal", "textAlign": "start", "align": "start", "alingItens": "start", "&:hover": {"backgroundColor": "#087ec4"}}} radius={`full`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`sql y base de datos`} css={{"width": "2em", "height": "2em", "margin": "0.9em"}} src={`/icons/database-zap.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "margin": "-0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em"}} direction={`column`} gap={`0`}>
  <RadixThemesText as={`p`} css={{"fontSize": "em", "fontFamily": "Poppins", "fontWeight": "900", "color": "#F1F2F4"}}>
  {`sql y base de datos`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "fontFamily": "Poppins", "fontWeight": "100", "color": "#C3C7CB"}}>
  {`Curso de 7h para aprender los formatos SQL`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_9f4c8a31bccf1f791e63a02802baa640 () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`https://mouredev.link/languajes`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "em", "backgroundColor": "#171F26", "color": "#F1F2F4", "whiteSpace": "normal", "textAlign": "start", "align": "start", "alingItens": "start", "&:hover": {"backgroundColor": "#087ec4"}}} radius={`full`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`un dìa un lenguaje`} css={{"width": "2em", "height": "2em", "margin": "0.9em"}} src={`/icons/bean.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "margin": "-0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em"}} direction={`column`} gap={`0`}>
  <RadixThemesText as={`p`} css={{"fontSize": "em", "fontFamily": "Poppins", "fontWeight": "900", "color": "#F1F2F4"}}>
  {`un dìa un lenguaje`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "fontFamily": "Poppins", "fontWeight": "100", "color": "#C3C7CB"}}>
  {`primeros pasos en los 11 lenguajes de programaciòn`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_f159e51f9d702aa9f97767ba881ecca3 () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.facebook.com/jose.aragonlaguna?locale=es_LA`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "em", "backgroundColor": "#171F26", "color": "#F1F2F4", "whiteSpace": "normal", "textAlign": "start", "align": "start", "alingItens": "start", "&:hover": {"backgroundColor": "#087ec4"}}} radius={`full`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`facebook`} css={{"width": "2em", "height": "2em", "margin": "0.9em"}} src={`/icons/facebook.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "margin": "-0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em"}} direction={`column`} gap={`0`}>
  <RadixThemesText as={`p`} css={{"fontSize": "em", "fontFamily": "Poppins", "fontWeight": "900", "color": "#F1F2F4"}}>
  {`facebook`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "fontFamily": "Poppins", "fontWeight": "100", "color": "#C3C7CB"}}>
  {`familia y consejos`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_01aed9cc6aeff3543c30d1e16fa9d418 () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linux.org/`} passHref={true}>
  <img alt={`linux`} css={{"width": "2em"}} src={`/icons/linux.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_d719f690c27676ece6184d1d5a3c1ceb () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.redhat.com/es`} passHref={true}>
  <img alt={`redhad`} css={{"width": "2em"}} src={`/icons/redhat.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_d6e7bcf047e9922d6cabe6c9513bf3da () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linux.org/`} passHref={true}>
  <img alt={`Linux`} css={{"height": "4em", "width": "auto"}} src={`/Linux.jpeg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_f7f66512488193832beab40a6ebb59dd () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://fedoraproject.org/es/`} passHref={true}>
  <img alt={`fedora`} css={{"width": "2em"}} src={`/icons/fedora.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_f9216fecd0a81fb423fa5cbbd036d214 () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.tiktok.com/@pepearagonlaguna`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "em", "backgroundColor": "#171F26", "color": "#F1F2F4", "whiteSpace": "normal", "textAlign": "start", "align": "start", "alingItens": "start", "&:hover": {"backgroundColor": "#087ec4"}}} radius={`full`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Tiktok`} css={{"width": "2em", "height": "2em", "margin": "0.9em"}} src={`/icons/tiktok.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "margin": "-0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em"}} direction={`column`} gap={`0`}>
  <RadixThemesText as={`p`} css={{"fontSize": "em", "fontFamily": "Poppins", "fontWeight": "900", "color": "#F1F2F4"}}>
  {`Tiktok`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "fontFamily": "Poppins", "fontWeight": "100", "color": "#C3C7CB"}}>
  {`Videos mas vistos`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {
  const state__page_state = useContext(StateContexts.state__page_state)

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_cb5edf864ed730e6ef1545318d0da5a2/>
</div>
  <Fragment_6499b51736be44284c15de43340cb16c/>
</Fragment>
  <RadixThemesBox>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='es'`}
</Script>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "background": "#171F26", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "em", "paddingBottom": "em", "zIndex": "999", "top": "0"}} direction={`row`} gap={`2`}>
  <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": null}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesBox css={{"fontFamily": "Comfortaa", "fontWeight": "900", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`ppara`}
</Text>
  <Text as={`span`} sx={{"color": "#087ec4"}}>
  {`gon`}
</Text>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
  <FloatButton badge={{"dot": true, "color": "#087ec4"}} href={`https://cafec.mx/`} icon={<img src={`/icons/donate.svg`}/>} target={`_blank`}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"maxWidth": "500px", "width": "100%", "marginTop": "2em", "marginBottom": "2em", "padding": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "width": "100%"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`6`}>
  <Link_0132a32e919f87e3656274802d1a53e5/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"fontFamily": "Poppins", "fontWeight": "100", "fontSize": "1em", "color": "#F1F2F4", "": "Poppins"}}>
  {`Pp Aragon Laguna`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"marginTop": "-0.5em", "color": "#C3C7CB"}}>
  {`@pparagon`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`6`}>
  <Link_01aed9cc6aeff3543c30d1e16fa9d418/>
  <Link_d719f690c27676ece6184d1d5a3c1ceb/>
  <Link_f7f66512488193832beab40a6ebb59dd/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`4`}>
  <RadixThemesFlex css={{"width": "100%"}}>
  <RadixThemesBox css={{"fontSize": "0.9em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+13`}
</Text>
  {` años de experiencia`}
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"fontSize": "0.9em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`700`}
</Text>
  {` seguidores`}
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"fontSize": "0.9em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`42`}
</Text>
  {` años de edad`}
</RadixThemesBox>
</RadixThemesFlex>
  <Fragment>
  {isTrue(state__page_state.is_live) ? (
  <Fragment>
  <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.twitch.tv/pparagon23`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "em", "backgroundColor": "#171F26", "color": "#F1F2F4", "whiteSpace": "normal", "textAlign": "start", "align": "start", "alingItens": "start", "&:hover": {"backgroundColor": "#087ec4"}}} radius={`full`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`En directo`} css={{"width": "2em", "height": "2em", "margin": "0.9em"}} src={`/icons/twitch.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "margin": "-0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em"}} direction={`column`} gap={`0`}>
  <RadixThemesText as={`p`} css={{"fontSize": "em", "fontFamily": "Poppins", "fontWeight": "900", "color": "#F1F2F4"}}>
  {`En directo`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "fontFamily": "Poppins", "fontWeight": "100", "color": "#C3C7CB"}}>
  {state__page_state.live_title}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesText as={`p`} css={{"fontSize": "0.9em", "color": "#C3C7CB"}}>
  {` soy ingeniero
                           y me encanta programar y ver como queda
                           la pagina web de mis favoritas`}
</RadixThemesText>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"background": "grey", "width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"width": "100%", "fontSize": "2em", "fontFamily": "Poppins", "fontWeight": "900", "paddingTop": "em", "color": "#F1F2F4", "": "Poppins"}}>
  {`Cursos gratis`}
</RadixThemesHeading>
  <Link_befa7247a535bad203b57eec2b52165d/>
  <Link_790c2489572e36a9e13267ca3de84bfc/>
  <Link_137132b68e135bcfac186fd5e3098479/>
  <Link_5d9ee91b0111bc4954a1a65174d7e1e6/>
  <Link_9f4c8a31bccf1f791e63a02802baa640/>
  <RadixThemesHeading css={{"width": "100%", "fontSize": "2em", "fontFamily": "Poppins", "fontWeight": "900", "paddingTop": "em", "color": "#F1F2F4", "": "Poppins"}}>
  {`Mas cursos en:`}
</RadixThemesHeading>
  <Link_f9216fecd0a81fb423fa5cbbd036d214/>
  <Link_5ca56509758f961ad7a57c6293a11d60/>
  <Link_f159e51f9d702aa9f97767ba881ecca3/>
  <Link_836876734fb2f591f67d0f7f4a802dbb/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alingItems": "start"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"width": "100%", "fontSize": "2em", "fontFamily": "Poppins", "fontWeight": "900", "paddingTop": "em", "color": "#F1F2F4", "": "Poppins"}}>
  {`Colaboran`}
</RadixThemesHeading>
  <SimpleGrid columns={[1, 2, 3]} spacing={`7`}>
  <Link_4d47b1cf8511869a83e21c0804162843/>
  <Link_d6e7bcf047e9922d6cabe6c9513bf3da/>
  <Link_54815c0d8c302401900e5bae7d8a8720/>
</SimpleGrid>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"marginBottom": "2em", "alignItems": "center", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "color": "#A3ABB2"}} direction={`column`} gap={`1`}>
  <img alt={`Logo tipo de python`} css={{"size": "1px", "marginTop": "1px", "height": "4em", "weight": "4em"}} src={`/python_vertical.png`}/>
  <Link_25b53a0cbedaf9bdd3a05c64ce60fdbb/>
  <Link_e406046821f422d4c59c1e05c38a4a86/>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`PpAragon | Te enseño programación y desarrollo de software`}
</title>
  <meta content={`Hola, mi nombre es Pparagon. Soy ingeniero de software, desarrollador freelance full-stack y divulgador.`} name={`description`}/>
  <meta content={`https://moure.dev/previews.jpg`} property={`og:image`}/>
  <meta content={`PpAragon | Te enseño programación y desarrollo de software`} name={`og:title`}/>
  <meta content={`Hola, mi nombre es Pparagon. Soy ingeniero de software, desarrollador freelance full-stack y divulgador.`} name={`og:descrption`}/>
  <meta content={`website`} name={`og:type`}/>
  <meta content={`https://moure.dev/previews.jpg`} name={`og:image`}/>
  <meta content={`summary_large_image`} name={`twiter:card`}/>
  <meta content={`@pparagon`} name={`twiter:site`}/>
</NextHead>
</Fragment>
  )
}
