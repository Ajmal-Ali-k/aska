import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { pageMarkup } from "./content.js";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

const SCROLL_REVEAL_SELECTOR = [
  ".ch-card",
  ".role-card",
  ".step",
  ".feat-c",
  ".lang-pill",
  ".ind-card",
  ".trust-cell",
  ".perm-card",
  ".ex-tabs",
  ".ex-layout",
  ".cta-final h2",
  ".cta-final p",
  ".cta-btns",
  "footer",
].join(", ");

export default function App() {
  const appRef = useRef(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = appRef.current;
      if (!root) return undefined;

      const select = gsap.utils.selector(root);

      const navEls = select(".nav");
      const metaEls = select(".hero-meta");
      const eyebrowEls = select(".hero-eyebrow");
      const headlineLines = select(".hero h1 .line");
      const heroBodyEls = [
        ...select(".hero-sub"),
        ...select(".hero-btns"),
        ...select(".hero-stat"),
      ];
      const switchboardEls = select(".switchboard");
      const cableEls = Array.from(root.querySelectorAll(".cable"));
      const pulseEls = Array.from(root.querySelectorAll(".pulse"));
      const dividerEls = gsap.utils.toArray(".patch-divider", root);
      const dividerCableEls = Array.from(root.querySelectorAll(".pd-cable"));
      const dividerPulseEls = Array.from(root.querySelectorAll(".pd-pulse"));
      const countUpEls = gsap.utils.toArray(".trust-num[data-count]", root);
      const scrollRevealEls = gsap.utils.toArray(SCROLL_REVEAL_SELECTOR, root);

      scrollRevealEls.forEach((el) => el.classList.add("motion-will-animate"));

      const showExample = contextSafe((button, targetId, animate) => {
        const panel = root.querySelector(`#${targetId}`);
        if (!panel) return;

        const currentPanel = root.querySelector(".tab-panel.on");
        if (currentPanel === panel) return;

        root.querySelectorAll(".ex-tab").forEach((tab) => {
          tab.classList.toggle("on", tab === button);
        });

        const hidePanel = (item) => {
          item.classList.remove("on");
          item.style.display = "none";
          gsap.set(item, { clearProps: "transform,opacity,visibility" });
        };

        const showPanel = (item) => {
          item.style.display = "grid";
          item.classList.add("on");
        };

        if (!animate) {
          root.querySelectorAll(".tab-panel").forEach(hidePanel);
          showPanel(panel);
          return;
        }

        gsap.killTweensOf([currentPanel, panel].filter(Boolean));

        const timeline = gsap.timeline({ defaults: { overwrite: "auto" } });

        if (currentPanel) {
          timeline.to(currentPanel, {
            autoAlpha: 0,
            y: -8,
            duration: 0.16,
            ease: "power2.in",
            onComplete: () => hidePanel(currentPanel),
          });
        }

        timeline
          .add(() => {
            root.querySelectorAll(".tab-panel").forEach((item) => {
              if (item !== panel) hidePanel(item);
            });
            showPanel(panel);
            gsap.set(panel, { autoAlpha: 0, y: 12 });
          })
          .to(panel, {
            autoAlpha: 1,
            y: 0,
            duration: 0.38,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          });
      });

      const tabButtons = gsap.utils.toArray("[data-tab-target]", root);
      const onTabClick = (event) => {
        const button = event.currentTarget;
        const animate = !window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches;
        showExample(button, button.dataset.tabTarget, animate);
      };
      tabButtons.forEach((button) => {
        button.addEventListener("click", onTabClick);
      });

      const anchors = gsap.utils
        .toArray('a[href^="#"]', root)
        .filter((anchor) => anchor.getAttribute("href") !== "#");
      const onAnchorClick = (event) => {
        const anchor = event.currentTarget;
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const target = root.querySelector(targetId);
        if (!target) return;

        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        event.preventDefault();
        target.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
      };
      anchors.forEach((anchor) => {
        anchor.addEventListener("click", onAnchorClick);
      });

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(navEls, { autoAlpha: 0, y: -10 });
        gsap.set(metaEls, { autoAlpha: 0, y: -8 });
        gsap.set(eyebrowEls, { autoAlpha: 0, y: 8 });
        gsap.set(headlineLines, { autoAlpha: 0, y: 36 });
        gsap.set(heroBodyEls, { autoAlpha: 0, y: 20 });
        gsap.set(switchboardEls, { autoAlpha: 0, y: 24 });
        gsap.set(scrollRevealEls, { autoAlpha: 0, y: 22 });

        cableEls.forEach((cable) => {
          const len = cable.getTotalLength();
          gsap.set(cable, {
            strokeDasharray: len,
            strokeDashoffset: len,
            autoAlpha: 0,
          });
        });

        gsap.set(pulseEls, { autoAlpha: 0 });

        const intro = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.6 },
          delay: 1.4,
        });

        intro
          .to(navEls, { autoAlpha: 1, y: 0, duration: 0.5 }, 0)
          .to(metaEls, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.06)
          .to(eyebrowEls, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.18)
          .to(
            headlineLines,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.95,
              stagger: 0.08,
              ease: "expo.out",
            },
            0.22,
          )
          .to(
            switchboardEls,
            { autoAlpha: 1, y: 0, duration: 0.85 },
            0.32,
          )
          .to(
            heroBodyEls,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
            },
            0.55,
          )
          .to(
            cableEls,
            {
              autoAlpha: 1,
              strokeDashoffset: 0,
              duration: 1.2,
              stagger: 0.08,
              ease: "power2.inOut",
            },
            0.72,
          );

        const pulseStart = 1.85;
        pulseEls.forEach((pulse, i) => {
          const cableSel = pulse.dataset.cable;
          const offset = i * 0.62;
          const duration = 4.2 + (i % 3) * 0.6;

          gsap.fromTo(
            pulse,
            { autoAlpha: 0 },
            {
              autoAlpha: 1,
              duration: 0.4,
              delay: pulseStart + offset,
            },
          );

          gsap.to(pulse, {
            motionPath: {
              path: cableSel,
              align: cableSel,
              alignOrigin: [0.5, 0.5],
              autoRotate: false,
            },
            duration,
            ease: "power1.inOut",
            repeat: -1,
            delay: pulseStart + offset,
          });
        });

        ScrollTrigger.batch(scrollRevealEls, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.62,
              ease: "power3.out",
              stagger: 0.06,
              overwrite: "auto",
              onComplete: () => {
                batch.forEach((el) =>
                  el.classList.remove("motion-will-animate"),
                );
              },
            }),
        });

        dividerCableEls.forEach((cable) => {
          const len = cable.getTotalLength();
          gsap.set(cable, {
            strokeDasharray: len,
            strokeDashoffset: len,
            autoAlpha: 0,
          });
        });
        gsap.set(dividerPulseEls, { autoAlpha: 0 });

        countUpEls.forEach((el) => {
          const target = Number(el.dataset.count);
          const suffix = el.dataset.countSuffix || "";
          if (!Number.isFinite(target)) return;

          el.textContent = `0${suffix}`;
          const proxy = { value: 0 };

          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(proxy, {
                value: target,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  const n = Math.round(proxy.value);
                  el.textContent = `${n.toLocaleString()}${suffix}`;
                },
              });
            },
          });
        });

        dividerEls.forEach((divider) => {
          const cables = divider.querySelectorAll(".pd-cable");
          const pulses = divider.querySelectorAll(".pd-pulse");

          ScrollTrigger.create({
            trigger: divider,
            start: "top 92%",
            once: true,
            onEnter: () => {
              gsap.to(cables, {
                autoAlpha: 1,
                strokeDashoffset: 0,
                duration: 0.85,
                stagger: 0.06,
                ease: "power2.inOut",
              });

              pulses.forEach((pulse, i) => {
                const cableSel = pulse.dataset.cable;
                const duration = 4.6 + (i % 3) * 0.7;
                const startDelay = 0.55 + i * 0.38;

                gsap.fromTo(
                  pulse,
                  { autoAlpha: 0 },
                  { autoAlpha: 1, duration: 0.4, delay: startDelay },
                );

                gsap.to(pulse, {
                  motionPath: {
                    path: cableSel,
                    align: cableSel,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: false,
                  },
                  duration,
                  ease: "power1.inOut",
                  repeat: -1,
                  delay: startDelay,
                });
              });
            },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ...navEls,
            ...metaEls,
            ...eyebrowEls,
            ...headlineLines,
            ...heroBodyEls,
            ...switchboardEls,
            ...scrollRevealEls,
            ...cableEls,
            ...pulseEls,
            ...dividerCableEls,
            ...dividerPulseEls,
          ],
          { clearProps: "all", autoAlpha: 1 },
        );
      });

      return () => {
        tabButtons.forEach((button) => {
          button.removeEventListener("click", onTabClick);
        });
        anchors.forEach((anchor) => {
          anchor.removeEventListener("click", onAnchorClick);
        });
      };
    },
    { scope: appRef },
  );

  return (
    <div
      ref={appRef}
      className="app-shell"
      dangerouslySetInnerHTML={{ __html: pageMarkup }}
    />
  );
}
