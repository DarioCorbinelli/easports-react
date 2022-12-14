import { Button } from "Components/1-Atoms/Button";
import React from "react";
import style from "../../SCSS/4-Templates/Banner.module.scss";

export function Banner({ stacked = false, textClrLight=true,logoImg="",title="",subtitle="",body="", margInlineXL = "var(--marg-inline-section)", bgImageData, textPosition = "center", textAlign = "center", btnContent = "default", btnTransparent = true, btnColor = "var(--clr-dark-700)", btnBgColor = "transparent" }) {
  let logoImgCenteringStyle

  if (textAlign === "left") logoImgCenteringStyle = {marginInline: "0 auto"}
  else if (textAlign === "center") logoImgCenteringStyle = {marginInline: "auto"}
  else if (textAlign === "right") logoImgCenteringStyle = {marginInline: "auto 0"}
  
  return (
    <div className={stacked ? `${style.container} ${style.stacked}` : `${style.container}`}>
      <picture>
        <source media="(min-width: 1456px)" srcSet={bgImageData[4]} />
        <source media="(min-width: 1024px)" srcSet={bgImageData[3]} />
        <source media="(min-width: 768px)" srcSet={bgImageData[2]} />
        <source media="(min-width: 320px)" srcSet={bgImageData[1]} />
        <img className={style.img} src={bgImageData[0]} alt="background - small screens" />
      </picture>
      {/* @ts-ignore */}
      <div style={{ "--custom-marg-inline": `${margInlineXL}` }} className={`${style.contentWrapper} ${style[textPosition]}`}>
       
        {/* @ts-ignore */}
        <div className={style.childContent} style={{ textAlign: `${textAlign}`, color:`${textClrLight ? "var(--clr-light-400)" : "var(--clr-dark-700)"}` }}>
        {logoImg && <img style={logoImgCenteringStyle} src={logoImg}/> }
        {title && <h1 className={style.title} style={{fontSize:"var(--fs-1000)"}}>{title}</h1>}
        {subtitle && <h2 className={style.subtitle} style={{fontSize:"var(--fs-600)"}}>{subtitle}</h2>}
        {body && <h6 className={style.body} style={{fontSize:"var(--fs-500)"}}>{body}</h6>}
          <Button fullWidth transparent={btnTransparent} clr={btnColor} bgClr={btnBgColor} content={btnContent}  />
        </div>
      </div>
    </div>
  );
}
