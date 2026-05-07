import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { pageMarkup } from "./content.js";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], [data-tab-target], .ch-card, .role-card, .ind-card, .feat-c, .perm-card, .step';

/** Scroll-triggered reveals: each group keeps timing appropriate to density & hierarchy */
const REVEAL_BATCHES = [
  {
    selector:
      ".mockup-sec .sec-label, .mockup-sec .sec-title, .mockup-sec .sec-sub",
    start: "top 88%",
    duration: 0.52,
    stagger: 0.11,
    interval: 0.08,
  },
  {
    selector: ".mockup-frame",
    start: "top 86%",
    duration: 0.62,
    stagger: 0,
    interval: 0.08,
  },
  {
    selector: ".route-map-intro",
    start: "top 87%",
    duration: 0.56,
    stagger: 0,
    interval: 0.08,
  },
  {
    selector: ".route-lane",
    start: "top 89%",
    duration: 0.48,
    stagger: 0.1,
    interval: 0.06,
  },
  /* Section headings (were missing — cards animated but not titles) */
  {
    selector:
      ".full-sec .sec-label, .full-sec .sec-title, .full-sec .sec-sub, .lang-sec .center-label, .lang-sec .center-title, .lang-sec .center-sub, .trust-sec .center-label, .trust-sec .center-title",
    start: "top 89%",
    duration: 0.54,
    stagger: 0.13,
    interval: 0.14,
  },
  {
    selector: ".ch-card",
    start: "top 87%",
    duration: 0.52,
    stagger: 0.085,
    interval: 0.06,
  },
  {
    selector: ".role-card",
    start: "top 88%",
    duration: 0.48,
    stagger: 0.068,
    interval: 0.05,
  },
  {
    selector: ".step",
    start: "top 86%",
    duration: 0.54,
    stagger: 0.11,
    interval: 0.07,
  },
  {
    selector: ".feat-c",
    start: "top 87%",
    duration: 0.48,
    stagger: 0.078,
    interval: 0.06,
  },
  {
    selector: ".lang-pill",
    start: "top 91%",
    duration: 0.4,
    stagger: 0.048,
    interval: 0.04,
  },
  {
    selector: ".ind-card",
    start: "top 87%",
    duration: 0.48,
    stagger: 0.082,
    interval: 0.06,
  },
  {
    selector: ".trust-cell",
    start: "top 88%",
    duration: 0.54,
    stagger: 0.14,
    interval: 0.1,
  },
  {
    selector: ".perm-card",
    start: "top 87%",
    duration: 0.48,
    stagger: 0.078,
    interval: 0.06,
  },
  {
    selector: ".ex-tab",
    start: "top 92%",
    duration: 0.4,
    stagger: 0.052,
    interval: 0.04,
  },
  {
    selector: ".ex-layout",
    start: "top 88%",
    duration: 0.54,
    stagger: 0,
    interval: 0.08,
  },
  {
    selector: ".cta-final .hero-badge, .cta-final h2, .cta-final p, .cta-btns",
    start: "top 87%",
    duration: 0.54,
    stagger: 0.11,
    interval: 0.08,
  },
  {
    selector: "footer",
    start: "top 93%",
    duration: 0.5,
    stagger: 0,
    interval: 0.08,
  },
];

const REVEAL_Y = 18;
const REVEAL_EASE = "power2.out";

export default function App() {
  const appRef = useRef(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = appRef.current;
      if (!root) return undefined;

      const select = gsap.utils.selector(root);

      const navEls = select(".nav");
      const navEl = navEls[0];
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
      const allRevealEls = REVEAL_BATCHES.flatMap((cfg) =>
        gsap.utils.toArray(cfg.selector, root),
      );

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

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const supportsHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      ).matches;

      let lenis = null;
      let lenisTickerFn = null;

      if (!reduceMotion) {
        lenis = new Lenis({
          duration: 1.05,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.4,
        });

        lenisTickerFn = (time) => lenis.raf(time * 1000);
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(lenisTickerFn);
        gsap.ticker.lagSmoothing(0);
      }

      const anchors = gsap.utils
        .toArray('a[href^="#"]', root)
        .filter((anchor) => anchor.getAttribute("href") !== "#");
      const onAnchorClick = (event) => {
        const anchor = event.currentTarget;
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const target = root.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        if (lenis) {
          lenis.scrollTo(target, { offset: 0, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        }
      };
      anchors.forEach((anchor) => {
        anchor.addEventListener("click", onAnchorClick);
      });

      const cursorDot = document.querySelector(".aska-cursor-dot");
      const cursorRing = document.querySelector(".aska-cursor-ring");
      const progressFill = document.querySelector(".scroll-progress-fill");

      let onMouseMove = null;
      let onMouseDown = null;
      let onMouseUp = null;
      const hoverInteractives = [];
      const onHoverEnter = () => cursorRing?.classList.add("is-hovering");
      const onHoverLeave = () => cursorRing?.classList.remove("is-hovering");

      if (supportsHover && cursorDot && cursorRing) {
        gsap.set([cursorDot, cursorRing], { autoAlpha: 0, xPercent: -50, yPercent: -50 });

        const dotXTo = gsap.quickTo(cursorDot, "x", {
          duration: reduceMotion ? 0 : 0.16,
          ease: "power3",
        });
        const dotYTo = gsap.quickTo(cursorDot, "y", {
          duration: reduceMotion ? 0 : 0.16,
          ease: "power3",
        });
        const ringXTo = gsap.quickTo(cursorRing, "x", {
          duration: reduceMotion ? 0 : 0.45,
          ease: "power3",
        });
        const ringYTo = gsap.quickTo(cursorRing, "y", {
          duration: reduceMotion ? 0 : 0.45,
          ease: "power3",
        });

        let revealed = false;
        onMouseMove = (event) => {
          dotXTo(event.clientX);
          dotYTo(event.clientY);
          ringXTo(event.clientX);
          ringYTo(event.clientY);
          if (!revealed) {
            revealed = true;
            gsap.to([cursorDot, cursorRing], {
              autoAlpha: 1,
              duration: 0.35,
              ease: "power2.out",
            });
          }
        };

        onMouseDown = () => cursorRing.classList.add("is-pressed");
        onMouseUp = () => cursorRing.classList.remove("is-pressed");

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        root.querySelectorAll(INTERACTIVE_SELECTOR).forEach((el) => {
          el.addEventListener("mouseenter", onHoverEnter);
          el.addEventListener("mouseleave", onHoverLeave);
          hoverInteractives.push(el);
        });
      }

      let progressTrigger = null;
      let navShapeTrigger = null;
      if (navEl) {
        const setNavExpanded = (expanded) => {
          navEl.classList.toggle("nav-expanded", expanded);
          navEl.classList.toggle("nav-compact", !expanded);
        };

        navShapeTrigger = ScrollTrigger.create({
          start: 72,
          end: "max",
          onEnter: () => setNavExpanded(true),
          onLeaveBack: () => setNavExpanded(false),
          onRefresh: () => setNavExpanded(window.scrollY > 72),
        });
      }

      if (progressFill) {
        gsap.set(progressFill, { scaleX: 0, transformOrigin: "0 50%" });
        progressTrigger = ScrollTrigger.create({
          start: 0,
          end: () =>
            document.documentElement.scrollHeight - window.innerHeight,
          onUpdate: (self) => {
            gsap.to(progressFill, {
              scaleX: self.progress,
              duration: 0.25,
              ease: "power2.out",
              overwrite: "auto",
            });
          },
        });
      }

      const magneticHandlers = [];
      if (supportsHover && !reduceMotion) {
        const magnets = root.querySelectorAll(
          ".btn-primary, .btn-secondary, .btn-cta",
        );
        magnets.forEach((btn) => {
          const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3" });
          const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3" });
          const onMove = (event) => {
            const rect = btn.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (event.clientX - cx) * 0.28;
            const dy = (event.clientY - cy) * 0.28;
            xTo(dx);
            yTo(dy);
          };
          const onLeave = () => {
            xTo(0);
            yTo(0);
          };
          btn.addEventListener("mousemove", onMove);
          btn.addEventListener("mouseleave", onLeave);
          magneticHandlers.push({ btn, onMove, onLeave });
        });
      }

      const fogEl = document.querySelector(".ambient-fog");
      const fogPalettes = [
        { x: "30%", y: "20%", x2: "82%", y2: "78%", c: "rgba(156, 255, 87, 0.07)", c2: "rgba(245, 241, 230, 0.04)" },
        { x: "78%", y: "30%", x2: "18%", y2: "72%", c: "rgba(124, 200, 87, 0.08)", c2: "rgba(245, 241, 230, 0.05)" },
        { x: "20%", y: "60%", x2: "76%", y2: "30%", c: "rgba(156, 255, 87, 0.05)", c2: "rgba(108, 193, 232, 0.04)" },
        { x: "82%", y: "70%", x2: "22%", y2: "32%", c: "rgba(156, 255, 87, 0.09)", c2: "rgba(245, 241, 230, 0.06)" },
        { x: "50%", y: "50%", x2: "50%", y2: "50%", c: "rgba(156, 255, 87, 0.06)", c2: "rgba(245, 241, 230, 0.04)" },
      ];

      let fogTrigger = null;
      if (fogEl) {
        const setFogVars = (palette) => {
          fogEl.style.setProperty("--fog-x", palette.x);
          fogEl.style.setProperty("--fog-y", palette.y);
          fogEl.style.setProperty("--fog-x2", palette.x2);
          fogEl.style.setProperty("--fog-y2", palette.y2);
          fogEl.style.setProperty("--fog-color", palette.c);
          fogEl.style.setProperty("--fog-color-2", palette.c2);
        };
        setFogVars(fogPalettes[0]);

        let lastIdx = -1;
        fogTrigger = ScrollTrigger.create({
          start: 0,
          end: () =>
            document.documentElement.scrollHeight - window.innerHeight,
          onUpdate: (self) => {
            const idx = Math.min(
              fogPalettes.length - 1,
              Math.floor(self.progress * fogPalettes.length),
            );
            if (idx !== lastIdx) {
              lastIdx = idx;
              setFogVars(fogPalettes[idx]);
            }
          },
        });
      }

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(navEls, { autoAlpha: 0, y: -10 });
        gsap.set(metaEls, { autoAlpha: 0, y: -8 });
        gsap.set(eyebrowEls, { autoAlpha: 0, y: 8 });
        gsap.set(headlineLines, { autoAlpha: 0, y: 36 });
        gsap.set(heroBodyEls, { autoAlpha: 0, y: 20 });
        gsap.set(switchboardEls, { autoAlpha: 0, y: 24 });
        gsap.set(allRevealEls, { autoAlpha: 0, y: REVEAL_Y });

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
          defaults: { ease: REVEAL_EASE, duration: 0.54 },
          delay: 1.4,
        });

        intro
          .to(navEls, { autoAlpha: 1, y: 0, duration: 0.48 }, 0)
          .to(metaEls, { autoAlpha: 1, y: 0, duration: 0.52 }, 0.05)
          .to(eyebrowEls, { autoAlpha: 1, y: 0, duration: 0.46 }, 0.14)
          .to(
            headlineLines,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.82,
              stagger: 0.072,
              ease: "power3.out",
            },
            0.18,
          )
          .to(
            switchboardEls,
            { autoAlpha: 1, y: 0, duration: 0.72 },
            0.28,
          )
          .to(
            heroBodyEls,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.62,
              stagger: 0.075,
            },
            0.48,
          )
          .to(
            cableEls,
            {
              autoAlpha: 1,
              strokeDashoffset: 0,
              duration: 1.02,
              stagger: 0.072,
              ease: "power2.inOut",
            },
            0.62,
          );

        intro.eventCallback("onComplete", () => {
          pulseEls.forEach((pulse, i) => {
            const cableSel = pulse.dataset.cable;
            const stagger = i * 0.13;
            gsap.fromTo(
              pulse,
              { autoAlpha: 0 },
              {
                autoAlpha: 1,
                duration: 0.34,
                delay: stagger,
                ease: "power2.out",
              },
            );
            gsap.to(pulse, {
              motionPath: {
                path: cableSel,
                align: cableSel,
                alignOrigin: [0.5, 0.5],
                autoRotate: false,
              },
              duration: 4.2 + (i % 3) * 0.55,
              ease: "power1.inOut",
              repeat: -1,
              delay: stagger + 0.1,
            });
          });
        });

        REVEAL_BATCHES.forEach((cfg) => {
          const els = gsap.utils.toArray(cfg.selector, root);
          if (!els.length) return;

          els.forEach((el) => el.classList.add("motion-will-animate"));

          ScrollTrigger.batch(els, {
            start: cfg.start,
            once: true,
            interval: cfg.interval,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: cfg.duration,
                ease: REVEAL_EASE,
                stagger: cfg.stagger,
                overwrite: "auto",
                onComplete: () => {
                  batch.forEach((el) =>
                    el.classList.remove("motion-will-animate"),
                  );
                },
              }),
          });
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
            ...allRevealEls,
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
        if (onMouseMove) {
          window.removeEventListener("mousemove", onMouseMove);
        }
        if (onMouseDown) {
          window.removeEventListener("mousedown", onMouseDown);
        }
        if (onMouseUp) {
          window.removeEventListener("mouseup", onMouseUp);
        }
        hoverInteractives.forEach((el) => {
          el.removeEventListener("mouseenter", onHoverEnter);
          el.removeEventListener("mouseleave", onHoverLeave);
        });
        if (progressTrigger) {
          progressTrigger.kill();
        }
        if (navShapeTrigger) {
          navShapeTrigger.kill();
        }
        if (fogTrigger) {
          fogTrigger.kill();
        }
        magneticHandlers.forEach(({ btn, onMove, onLeave }) => {
          btn.removeEventListener("mousemove", onMove);
          btn.removeEventListener("mouseleave", onLeave);
        });
        if (lenisTickerFn) {
          gsap.ticker.remove(lenisTickerFn);
        }
        if (lenis) {
          lenis.destroy();
        }
      };
    },
    { scope: appRef },
  );

  return (
    <>
      <div className="ambient-fog" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress-fill" />
      </div>
      <div className="aska-cursor-ring" aria-hidden="true" />
      <div className="aska-cursor-dot" aria-hidden="true" />
      <div
        ref={appRef}
        className="app-shell"
        dangerouslySetInnerHTML={{ __html: pageMarkup }}
      />
    </>
  );
}
