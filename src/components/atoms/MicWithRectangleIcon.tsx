export interface IProps {
  className?: string;
}

export const MicWithRectangleIcon = ({ className }: IProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 67 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <path
        d="M67 18C67 8.05887 58.9411 7.04529e-07 49 1.57361e-06L22 3.93403e-06C19.2386 4.17544e-06 17 2.23858 17 5L17 39C17 44.5228 21.4772 49 27 49L62 49C64.7614 49 67 46.7614 67 44L67 18Z"
        fill="#FFF1DA"
      />
      <path
        d="M0 6H40V56.5385C40 66.7345 31.7345 75 21.5385 75C9.6431 75 0 65.3569 0 53.4615V6Z"
        fill="url(#pattern0_1_389)"
      />
      <defs>
        <pattern
          id="pattern0_1_389"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_389"
            transform="matrix(0.0133333 0 0 0.00772947 0 -0.0333333)"
          />
        </pattern>
        <image
          id="image0_1_389"
          width="75"
          height="138"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAACKCAYAAADi+rf7AAA/JElEQVR4AezBB5RcB2Ho/f/td+70me19V71r1axVsSzJtowbJXQcsCGYEjDJI7SXBy8xBALh45kWShxiisGJjQ2WbQy2XGTZsmzVXdXtu9q+Ozt97p257WW/83FOjo/BNe+d75z8fvyX//Jf/sv/jwj8X9bS0mLccsstkZ6enlV2pRLRdF1raWlxTdOcGx4ejimyXGptaxs/ceLEVGpuLvPc8887/F8i8H/QrbfeKgWDwV3JROJKXQ802o6zprm5qVXTtJgkSvT2XmB8fBxBEGhpaaGtvZ3+vj6eeuop2tvbWbdufa/ruUeffvrpscWLFh1KVlU98aY3vSnP/yEC/8nuueceraen+2pFVq5fvnz5m0qlUsz3fSzLwvU8ZEkin89jWRamaeI4DocPP4NlWdTW1rJy5Sosy+Kppw7iOBVu+NP3UV1Vzc9+9jPWr19nd27YeMdTBw/+8/adO4//6Q032PwnEvhPctW+fc3veMc7PlgoFG4WRbE2Eo0SCoYoV8rMzsyQTqcplUqk0/P09PTg+x41NXUsXbqUVCrFww8/RKGQo719MV1d20ilUhw8+CiuC29+81sRBIEH9t9Hx6KlfOvb3+GHP/xhOh6PfeP8+Qvfve+++9L8J5B4nV1/3XUdN73//f+wePHi7+dyucsNwwhVVVcTiUQoFouMj40xOzuDaVq4rouu60QiUR555BH6+y8QDIaIRqPU1dXR39+HZRYIhSMYRhDX9SkVswwPj9De3gEInD3bTV/fADfffHPgC5///J73ve/Gm9asWXP46aefvsjrTOJ1csstt1Tv3LHza2vXrv3n1paWzVu2XKLW1NRimiUkUcQsmWTSGYrFAq7rIEkSiqIgiiK6rhMKhejt62Ogf4CNGzeyQBI9xsYnGRkZZf36Tupqa+ju7qZctojFk1x99TUcPfocfRcuIIoS4XCYn/70juBf/uUn39vU1NT27W9/88APfvBDm9eJxGu0ZPHi2E033fTZtWvW3L1j587ta9euk4ulEs8dOYLt2CQTSWzbxvNcfB9CoSC6bhAKBVFVFUEQWFBbW8tAfy/FUolypUJ7ezuJRBW9F87hug7ReIINGzbi+y7T05PMzs7xp++9EdMsc3F0gFy+yL59V3H06BEOH35WVBWl88Bjj++MxaJ3jo2Nu7wOJF6lmpoa+bbbbvvglfv2/WpRx6KrY/GY0tPdzclTp6iqqqJr2zZEQeTs2bMMDAwwPz9PoZBn69YuXNdl7bp1KIpCsVjE931kWUaWRIaGhhgfn2D79u2EQmGymVmy+Tzz82luvPH9tLY0cuDAARy7wrLlK9m8eTO/+tWvyKTn2b1nL1a5zJmek+zatZvDh59pbWxozPf19T3D60DiVfjIRz6y5aYbb/xVPpf74MDAgDE0NIiiKKxctYrGxkaGBgd54rHH6O29wOzsLPl8nkgkwtJlyxgbG2NqcpLamloChoFdKYMgIMkyuqbR3X2ciu2QTCRJJhNEwiF6e/soFousX9/JsmWreOKx3+I4Do7j8Sd/8lYefPAh8CsEg1HWrVvPs4efxjCCrF69hlOnjm9+73tv/KfDhw+bvEYSr8D73vfe0FVXXfWF5cuX//j06dMNc3NzyLJMIpFAlCTOnD7N6OgopmkSDIdIJquoq6ujqamJHTsv5Q1vuIqOjg4e/s1vWLFyJflcjkQiiWmaCICuG4wM95FKpalUbNauXUM4HOXC+dO4rocoq+y7ah99vecZHR1lcmqat73t7czPpzh75gymaXL1Nddy5NlnmJiY4M1vfgv799+vRyKxmQsXLhzmNRJ5md75zncu37Rx0zOe6/5196lTguu6aJqGIEClUqFYKJBIJGhobKSuro6gEcTzPGZnZzl16hQnjh9jQTweJ5FI0NbWjh4IYASDGIaBKIrIssTixctRFJmp6SlAwAiGaGlpw/N8RoaHcByXK668GlEQMEsFJienuP76N+K4LmNjo1TKZdat34hZKpDL51myZAnpdOp6URR5rSRehr/+67++LBaLHRgfH2/xPI9QKISu6yiKjKbpJBIJWlpbWbtuHeFwBMdxWGDbNvl8nmw2i+u6XHbZZYiiSGp+HlEQUTUVTdPI5XIUigWKxSLxRBXp+RRGMERbWxvlcpl1nRuZmZmlvb2dXbt2UVtbR7lsMz4xzjXXXkd9fT3TUzP09V1g2/adtLW1cfDJJ0gkqmhoaOTsme7W7373H793zz2/LPIaSLyEj37kI++Ix2L3lctlQ9M0ZFlGEARkWSYcjrB8+QrWrV/Prl27QBCYnJigUqlgmialUpFisYht21iWxdatWwkGg9i2zUB/P2tWr8HzfNKZDJl0GsuycByHyy+/gmuvu46Z6WlM08T3PLZt287eyy8noAdYsGnzZt75zvdQV1ePbVfY0LmBvXuvpKGxESNgUFVdQyQSYemyZTzxxBNCMBg68dxzz53mNZD4I770xS9eoev6PcViUalUKoiCSCgUIhQKsXTpMrZt30HXti4sq4xtOwwMDFAySzi2jed5+L6P67p4notllVm6bBn19fVEozEefvg37Nq9m1wuh+M4ZNLzFItFFmi6zooVK5lLzZHLZTFNC0EQEEQRTdPRVBVN1xBFEUkSEQQBx3FRFIUFjmPT3NxMTU0t5bKFpqmk5lPpc+fO7ec1kPkDvvCFz7ePjY/dHQqGlFAoxNauLirlCr7vs3HTRuKJBJqmoakqgiAwOjqC67oIgogky2iahud5lEolVFXF8zwGBgbo7OxE1zUWOLaNpmmUyxYjIyNcuHCebDZHuWxxx7/cTqlkUi5XsCwTfB9REpFlmWQiSTQWQ1FU6hsaWbFiBYIgMDY2hhEwCAYNampq0XUdQRSRJBkBtl1z7bXCgw884PMqyfwBIyOjd1RXVUWXLVvGtm3b8fEZHh5m8+YtVFdXMTU9QzKRYEEgEECWZGRZRtd1BEHAc10kSUKWZUBAkiQG+gfwPI9KxSaXy/KlL95KX+8Znn/+KJZlIYoCoiCi6woV28UIaAiA65SRJAm74qHKOvOpSbLpaTRNBd/mQx/6EJVyhS/d+gU838NzPWzHIxQ0WLlqDY2NTfg+y7KZTD0wwask8yI+/KEPvbNQKFza2trK5s1bGL04SrFQpKGxgVgsiu04+J7H78ViUSYnJpAkCUVRcBwHUZKQZRlBEJEkCVmWmJyc4APvfz8PPrifgK7Q2lzH3t1dRIMwNDxOLl9EFAU8z0cQBPB9yhWbeCyMIAiEwwaSJKEqCq7nkc7k6e29QDabJRaLs3f3TkZHB8nnixRLZUqmxemebmKxOOFw2Mb3g7wGMi+wfft2KZ/PfyoSiTA2Ns7Pf34nGzduJJGsQtd0XNdD1zU8z8NxHBRFwTAMZEXB8z0cx0EUBQRBwLZtUqk5Tp48yfnzZykWskSjIa6+souG+hrOnusjmyuRTESZmZ3HtMo4ro+ma4RDEXzAMAwqtoNhBIiEwxiGQTQaQ5IlKhWHi2OTTExMIAoinRu2EAwGMU2TubkZJianSc3naGtve3BwcOgzh55+uo/XQOYFPNddD/6G6elpLMuivb2daCyOIAhYZYtSqUQgoCMrCqWSSTSqsCAcDlMsCjiOg1ny6b3Qy4MP7qe39zy6JhGLhKiraqCjvYnmplo0Tae2pppgKEJr+1LWbrqS+fk0juvhuR6CAJqm4TgO09PTlMsWhhGkqamJtvYOqqqSiKKI7/sYRhBFkbnqmjeyY9flLCgWi2QzadLpNIIohs1S6W23fPzj/re+/e2zvEoyL7B06dK3+r6PLMvouo4syziOjaIoVCoVCoUCiUQcQRAolUpEoxEW6LqG67pYlsX8fIrv/eM3cZwydTUxErEwmqYiSRL5okUwXM2ll13J0PAkGzZ0Eo3FcVyHJx57jPPnzzM5OYFlWVQqFiWzzHwqRbFYwHUcPM9D01SCoRDRaIxQKEwoHGFbVxemZXHu3DnCoTDhSBhZlknE4+B5lyqKeunIyMhfXXP11e0PPvTQLK+CzAtIkrRLFAV830dRFCqVCqZpYhhByuUK+XwO23bQNY1UKoXn+YiiQCwWJ5WaZ4GmBzBNkx1d6/A9h3zBJBavIhiuJpGs5sMf+yyxWIz59H5+97vfkc+lefTRh+nrH6RslVFkiQWBgIbruiyQZRnbdlBVGUewKZdspovzFEMGp6bnufnmD5FMJrjvl3cxMDCAbds4rocoysRicTZv3oIkiUFBUHYA9/EqyPwHsixjWebyYDDEAkEQqFQq5PN5EokkjuNQKBSwHQfXc3n28GGOHHmWd73rXQQCOuDjez6xaJTGphb6B8e45JJtbOpaiuf5zM7OYpoWP/zhD3jkkd/RffI4hqHxrrdfy/o1SwgFBGZmM1jlMpqqIIoituPgOC4LNFUhFDTQNAUjoLMgky2gyCJHjz7Pvn1XsWvXLhSxTMksk07nKRRLpFIzTE9P09LSUgwEArO8SjL/wS233FKTSadDkiRh2za+7+M4DrlsDsexEQSBmelpvvH/fJ07f/ZTZmYmScRC7N27l5qaGkKhMKZpomoaf3vr3+E4NoV8ntT8PL0XLnDy5AlGRgaJhgN0tDfx7ndczezsHL4vEgoFiUXDpDN5KhUBx3EwjCCGEcZ1PSRZRg8YGAGDqqokwaCBKEqoqsJ8ukCxWGBmZpo1aztJp2bI5dJkMjlm51L09Q9TU518aNny5e//7Gc/O82rJPMf5HI5s1wuO6qqKq7r4roOtm1TKOQp5As8/vhj7N9/P6nULDVVMS7tWkM8EWNosJeamhokScQwDDyvQCQS4eLFUR599Hc8e/hZ5tOzxCIhOlpqqaqK09bWQk1VAseuMDR8kct2X05bx0pWz+dxXfA8D1VVSSaTRKJRTvf0UCjkWdDQ0Ehbezt1dfUEgwayLBMIBHAch+rqGpYtX0k2m6NYLGKWSgiCQKFY2HT82LHb/uIvPvHb22775h28CjL/we23355/z7vflfc8LyBJEpZVRlFUhoeH+PFP7mBifIyArrGko5G62iThcIhgMMGyZatZEI/HSaXmwYeyZfG97/0jI0MXCOgayxe3oOsqsizheR4g0rZ4LSvW7kIPhNh56U4KhSKnT5/mxInjTE1OYJomo6OjCKLI4OAghXyOYrGAKApIkoQRMIjFE2iaio9AZ2cnVVXVjI+PUyqVkCQJ3/epq6tDVZQaWZbf2dPT884P3Xzz3A9++MMHeIVkXiAciZw1S2aNpmmUSiVOnDjGhQsXEASfZDxMPBYmFAwQDMW56rp3sbVrJ6FwmAXhcBjbrlAslZBkmWI+w4Z1ywjoOulMDgSRmrpW4sk6Pvihj7Jq1UpmZ2f51a9+xeOPP8ojv/stTzzxJHOzc1hWCR/QVAVVkRAEAcdx8QFFllBVhZKmUchNI8sK8+kMO3fsZNeuy/jmbd9g//334Lketu1gVWw0LcCOHZcSDocplkp7gQd4hSReYM/uPctSqdROQRB47LFHGR8fQ5ZFErEwmqawZNlKbnjfzXzmv/9P1ndu4MiRIzz+2AHWr1+PJEnk8wWKxSKe5zE6OsrpntNU1zayrrOL1Wu3gCBTLJoYwQC/+MVd/M3//Dz3//peMqmLLGmvw3NKOE6FgK5SlYhSlYgSCOioskwgoBKLhInHQtTVVpGIh4lEghi6SsV2ESSVLVsuIaCrjA6dIZmIoCgyiixRLls4rs/y5csny5b19e6engFeIZkX6O7peVSRpc+JokQmk0FRJCKhADW1Dbz3xj9j7dp1ZLNZ7rzzTu6882f0nDpBY32SjkUd7Nt3FeFwiLk5hQU33PA+rrnmegIBnWw2y+DgIBcuXGBgoJ8H9v+StpYGNq1fDOvaKFku4UgUXdeRJAlFkfE8Dx/QNA3Pg4ARwEciZBiEIiEikQiJeAyrYlPTUEFRVOZSKaLxJMtXrMU0y9RZFjMzM/QPDLFs+YrDDz700O7h4eEyr4LMCwwODh5dvWpVyXUdQ1U1wqEAXdsvZdu27bS3t/PYgUe55567GRkZojoRYduWVSSTMXLpGRYEg0FUVcV1XULhMJ7vcezoUR57/AAD/X0oElQlo6xc1sqmjWuRJBnPh/m+AayyQ3PbEmobFlE0XQK6TiBgkEhWsWLlCrq7u5lPpbAsi0QySVtrK21t7URjMURRRJIkZFnG8zxu+rNbcD2XslWmUCxQKVdIp9Obm5uajoyMjnSvXL7i039z661TvAIyL9Db25tbvHjRuyVJ+mxXV9fW2to6mpubGRkZ4Z9/dDtDgwMYAY3F7Q1UJWMYho6uG6xcs5EF0WgUVVFwHYdypcK9v7yXh3/za3RNoa2pilAogCIrKIpMPl8kGq/hkku2EU0u4qYP3oxVLjMyPMLpnm4mJyepVGzmUnMcO3aMwYEBZmdnyOVyeJ6DJMkEgyGi0RiqpiEIInW1NbzvxpvwgXvuuYdKpYIoiGiaRiCgy4qirsP316XS6XngL3gFZF7EQw/95tdvvP76zvb2jq2ZTIbf/vZhei+cRxB8ErEw0UiQoKGjaEGuuuat7L78WlpbW1ggCAKRaJRCsYDnuRQKGVqb61ixvJ2ZmRS242IEI4SjVezccy1vfds7EUWRs1/5CpZlcfjpg9z1r3fT39/H3OwsplUC30dVZVzXw/d9NE3B9yFo6BgBDdfzKJbKpObzfOITf8nhw4fJ53M0NjTyja9/BcsqYTsuni+wYcNmamtrMUulbbxCEi/iq1/96qpUKvVv/LunDz3JyMgwkiQSjQQJBDQam1u57k3v4JZPfJo9e/cxNDTIQw89RHt7O4ZhUCqZZDIZPM8nk8ly6tQxfE+gvWMpS1dsIBqvoWSWaW1tZ2Jigq//wz/w0EP3c/+9P0dXbFIz4xSLORRZIGToNDVWk4hH0DUVI6Cj6xpViSjJeIRoJIwiy2SyJoGAwRvf9BZ+8uM7cF2XpqZG1q3vZHz0AoosAz7FkkVn54ZTI6Oj/62vr2+EV0DmRVRVVY05juMXCgUhXyghiiKRUICa2gbe8ifvYNv27UxNTnHg0Uf4b3/5CZ555hCxiEGpkOEvP/kZIpEwggCu63LJ1q3U1NSQrKoim82SSaeZnb1If38fTzz+KKLosXxpO1s3LiWdLRJN1LJ0qcvcfAbLKhMIaDiOi6rIuK4HAmiqjqoZaHqQmpoEM3N5Nmzs4E1vfgvzqXlUVaWleQmaHkZVVT56y+fY/+u7GR4Zo6m5feJ/3Xbbel4FmRfxgQ98IPu+9733WdM0u2KxGKWSxI5L97Bhw0Y6OhZx6KmnuPvuf2NosJ9wOMCm9UtpbqwhMz/FgmAwCAj4vo+uB2hra2dkZJhDhw5x5kw3qdQsiViIxvoYK5cvprm5Htf1yOV7qVh5VC1Ee8cy2hAAGU3Tqa2rZ8uWS5idm2Wgv590Oo2iKNTW1vKm5ctpamoiEAjw1MGnmJicxDdWc3EmR0uNQygc4qY/+xiWaZLLZRu2bNlSHh4e7puemfn8r3/96/t4mWT+gIsXx65bvHjRTcGg8TlRlBKNjU2Mj4/z85//jIH+PhRForGhmpqqGJqmYFoV9l5xNQtEUSSZTJDP59D1AN2nTvLd73wTz60QDAZYtawNRZHRNRVRBEEQqapuYLUS4+3vvolYPEEum+Ppp59meHiIUqmELMvMp+cxSyYzszNMT01hWSYXei9w6tQpEskkLc3NbN+xg3g8zrFnH+DKvV2omookSgwODtDf34+mKoiirJqmuaqutvZzwH28TDJ/wGOPPZZqbWmpqa6uTkxNTfPYY4/Q39+LKAjEYiGqk1E0TcHzBfZcfi27917NqtVr+L1wOEw0GsN1XTKZLEZAYsP6DUxOzaJrKp7nE0/W0bpoHR/581uIxeJ8/3vfIxZPUCwWeOCB/TzzzCH6+/vJpOcpl8tYlskCSRKQJBkjoOL5AqZZRpJVioUCy5av4Po3vol77/0lx6Nltm/fTjab4Wt//3c4jkPFrtDY2MKWLZcgCELne97zHvXOO++s8DLI/AFf/vKXQ6d7ej5p2xXOnOnm4ugoiioTMgJoqkwwFOfKfW9gz+VXsXTpMsbHx7n77rvZsmUzS5YsIRQKIUsStm3TsagDz/MZHhmjqbmdqupGYrEEs3MpBFHF9+Ff//VfeeihB/m3u35CR1sdpmnSd74P0yoTMhTiUZ1wuJ50Oo/juoiCgKrKqKqK53kMDk+iaSoDA708sP9+/vzPP0bvhQs4jsP0xDAdrdXkCyWyuSL5fBbHce51XffWO++8s8LLJPBHvOfd7+7PZjOLzpw5y/z8DNGwQTxRzXVvfAvbtm1ndmaGVCrF4WcP8/RTT6IqAjt3XspP7rwbz/c5+vzzlEolKpUK586ewzB0fB+mpqbIZDKMjo6QSs0wODBAU0OS9rZmSsUCl3RtJ5/L0N3dw+TULLbtIMsywaBOIV/CLFdQFRUfiEfD6AEdSZLI5GxkRUEUJTZv3sLNH/owhUKBn/74BxQLBTKZLPPpDIVi2ZuemWkPh8Kzp7q7TV4mmT8iWZX8p0Kh8JWm5iahbBXYfMlOtm3bTl19PcePHWP//l/T23seQ1dpbqihtaUOXfVxHBdZlohEIpRKJrKssGjRIrLZDD09PTz99CHGx0bwPZt4LMzuSzdQX1eHriv09g0yMzuPoUskkwnKtkgoHCNoGESiMVpa25AkmenpGUzTRFFUEskEixcvZsmSpQQCAWRZRhQFFqiqyg3vvRnf98ikM6QzaUrFopjJZIb+XW7xksW3/+53j3wqn8/zUgRewgc+8P7GeCx219jY+I7a2hp8H5544nFGRobQVJnqqhjhkEEkbBA0Alx17du5+cMfZ8H4+ATDQ0M4rsvYxVG+/vWvMToyRHVVlEQsQihkIEkijQ01RKMxkskEvhBg0dI1bOjcAJLK80eO0NfXi+d5RCIRmpqbsSyLnu5uJiYmyOdziKJAOBQmWV1NLBalXK4gCCK1tXUIgkBfXx+e52LbDgIegYBBIKCTTmfI5/OVU93dkXPnzpV5CTIvoZgvfFJTtR2u6/Lkk08yNNiPKApEwwGSiSiSJKIoKlu6drN77xvYurWL3zOMAIZhUCgWcF2PsYvDXLlnC+lMjkrFRhAgEokiKgne+s4PsK5zMwcPHqS2tpb2RUs4ePAgx48f4+zZM8zMzJDLZbCsMqVSHtt20VQFVZWQJZlgUEeWJCRJIpGIMjE1zz9+/0fU1dXx63t/wezMJMWShWmVcRyXUDjKG95wLbFYzP3Mpz+16Mab3n+WlyDzUgSumZubo7+/l97e8xgBjYCuYhg64XCUzZfs4JKunWzatJFyucKzzx6mqqqKtWvXEolEcD0P34f6hnoa6msZn5xFlhWWrewkHElSLlcQBIEVq9YzOjrKE48/zujoEHgWigzHjnfjuR6O6xIydKriUfJ5FVEU8DwPURKJhIKomkIsEkJVZQrFMo5dZnJykqamJnbu6OL4scOYZhnTtEhn8pTKHqIofve555776vd/8IOLvAwSL6FzQ+fWfC6/NpfLk8ulCQUDxOJJrn/j23jbO27AMIIU8gUefOhBvvLlL/Lzn93BE4/9jnffcCOappHNZkmn04BAfUMLDU3t7Nq9D00zKBQKzM+nGBkZ4dvfvo3bf/hdysUUmuKxasUiamuq8D2bfKHEgmAwgOt6iKKI67p4nocsiziOgyiK6AEdRTVQVJ14shpF0WlpacXzoVK2SCQS6EaUUDiMrBrU1tb+a31DffexY8cKvAwCL+HTn/70pr7e3i+HQqGuZw8fDK1dt5Frr7ueqqoqhoaGeGD//Rw79jyqItJYV0VTYw0BXeWLX/0+ixYvZWRklN4LF3A9D7NUIpfLMTo6wvHjx7hw/hzpdIq6mhjNTXUsX7aIWCzCyMg4ri+zZu1ajhw+yNj4DIKoEjBC1NXWkEjWoqgauWwW23FRFIXqmmoaGxrpWLSIqqpqDCOAoig4joskiViWRTabo1gskkmnqVTKZDIZzp49iyiKpy709nY98sgjJn+EwMtQW1srveUtb/lSJp3+bDgcJh6Pc+jQQc6dO4MRUEnGI2iaiq6pVFfFaOtYzlf+4bsoikI6neH48WM4jks2k+GnP72DkyeO4fsuNdUx6qoT+D5Eo2Ha2poIBAI4joARirFz1+WoeojhoWH6+vooFotEIhHaOzoQgCNHjjA1NUWxUEDVNMLhMFVVVURjMSRJQpJkdE3DMAJMTk6RzWUpWxaWVUYQBVRFplKxmZubI5fPb3nkkUee54+QeRl2bN/+ZceufBp8jhx5lpGRQRRZIhIKEI+FURQZ3/dZuXo9u/e+gd17rkBRFBaEwyFEUcRxLEKhMMePH2X1ilZ8z8PzPDzfRxQEdCNMa8dadu7ai+34DA0NsePSvczPpzl/7jzjY2MMDQ+TyaYpFYtksxlsu4JdcZBEH1kW8RFIxMMYuoaqaczOzfO3X/wHtm3fyRf/9q859vzTFIoW5XIF0yrjOD7Xv/EttLW1pY8895zGS5B5GTRNa5uZmSGTyTDQ34se0NB1FVEUkBWdnZddzurV61m7bi2CIHD06FEURebyyy9HlmXi8Ti27aAoCsuWLqFUyiEAyeo6GhtbCQSjlEom+65+My0tLTz5xBM8/PBvOPrcU4xfvMjxE8coFEpIkoiiKqiyTFUsQL4IclhHEAV0VaWqKoauqYiiiOO6OI7L8ePH2HJJF5s3b2Zi9Dy241IqmeTyReYzRYKh0LerqpP/49ChQzlegsTLsL6zs9ayrKs9z2N6ZoqArhCPV3HNdX/C29/+bkRRYXp6igMHDvD9732HX/z8Jxw+dIAtW7dTX99AuVyhUMjjuh5V1bVISpAdO/fS0NiKj0Q6nSabzXDgwAH+++c+w4FHHsAt5wiHdJYt60CRPCqVCgKgyBLBYIByxUYSBQRBwHM9JElEFEUkSUJWVARBRNN0rIrHqlWr8RCYm5shEkkSjSUxghECRhhZVgb373/gifr6eml2dtbij5B5Gfr7+/+5uakpF41Gr1y1csW74olq6bLL9lDfUM+5c+d48onH6e09j+dWSCSirF+ziFDQYHxslM7OjYRCIQRBxPcd2ts7SMTjzM3NMTIyQk9PN1OTE1TKRdpa6rj8so00N9Yyn8mRSmVQVBVBENE1lXy+hBE0CEcSNDRGCYajFPJ5ZFlBVlSi0SiNjU0sXbaM5qZmFFVF0zRCoRDxRJzm5lZs28Y0TdLpebKZDPl8/l1NTU3vGh8fN7dv29b1T7fffoo/QOZlOHz4sKXt2nVnY2PjkiVLV3q2bUvHTxyj+46TjI9fJKArRMNBAoEIuq5iVxw8Q2Tjxs0siEQiSJKIKIpIksiJE8e5//5fk56fpaY6TnUiRCJRi6qqRMIGJdMkFDSYms5Q37iMZSs6GRy8SDqbx65UkGWFurpaFEXl7NkzjI+PY5omnpfBcVxs22Z2ZgZJlimVTKLRCI7tcHFslOnpGVzXxTJNXNdGFGWSySSu6wbm5+f3Aqf4A2RepmAw+Fe+73++XC7T03OKkeEhVFUmZGiEQwaGoVOp2DQ0tnPZnivZvedK6huaWKAoMkEjSKFQxPd9Tpw4TjQksXzxGrLZPLIiI7BARFIi7LliH7UNHTx7+Fne9o5347ouDz7wILNzJxgaGiKfz5NOp8lmMxQKBWy7QqVsYtsVArpGJGwgyxJBI4BVcXjzn7yLt77tndxz9y/oPn6QUqlMuWJTLJmUyzY7du6mvb39fCabPccfIfMyqZpmZjIZJEmir6+XaCSIpirIsoQgKqzr3MaSpcupq6+noaGR0dFRBgb62bdvH4qiEDAMSqUSsiRRW1dPITuNaZYRJZnWtiXogQiKGuDaN72D7du3UygUue/ee/nRj/6ZmalRHnjgAaanpzFNC11TUFUF3/fxHBfB94hGdHQtghEIEAhoxKMhSmYZUZIZ7O+lXC6zbl0nh554kFg0TKVik8sXSGeKTE5N3zE5OXXzs0eO2PwRMi+TLMsHjXi8XCqVtEQ8jih4xGJJLunaSWdnJ7Ozs0xPT9Pd3c3AQD+jI4OEgzrZv/ki77nhRqKRMJqm4nk+u3fvQQDa21uprWskNTfH3NwcuVyO/fffz23/6xucOX0S8Ni0fhk7d+1l9fIWJMEhm83jA7Is4Xs+llXB8zwcx8NXwfc9ZFnELJcpmSauJ2BWRrl48SLBUISWtiU4lQq+71O2PTLZAg1NrZ2hYHj31q1b52775jeP8wcIvAIP7N9f9fzzz287c6bn7y2zvKKtvR1FkSmVTM6dPcPIyDDlcoFYNEwiFiaRiHLpZVfwqc/eSqVS4cCjB3BdF8/zyOfz5PI5ZmdmOH36NBcunCOdnicWCbBqRQcrli/CCGg8+dRzvOeG93Hs+UM8e+Qk+UIJ3wdND6CqGppuEAgYiKKEJCtUJZNU19SyeMlS2ts7SCaTKIqCrmvYtk2hUMA0Lcpli0KhQCGfp1AoMDk5yalTJ1EU9RP/dvfd3+JFyLwC3/v+93OLFi3aF4nElshyibGxMXp7zzMzM4UoQDgUIFadQJYlNE3DcTw6N3SxQFVVItEI2WwOH5iamuS++37JyMgQkuDTUJ+kfmkjiqJQU53Atm0Krkc0GmVoeIQlKzZR07CcuVQOWZYwjCDV1dUsX7GSI88e5vz586TTaQpFE6NYwq5U8H0f13XwPBdFURBFEVGUUGQZUQhgmhaCKCKIIoZhUF1dQzab3QN8ixch8wr4nnft+NjFjwYCBmfOdDM8NISqyoSCASRJRJJEyuUKNbUtbNl6KTt37ubS3Xv4vaqqKkolE0kS6e7uJjUzxtJFjZSKJYyAjuf5yJLIgliiiW07LiX0zDFu/tBH0AM6p3t6OPr884yOjmLbNqZp4jg2pmlimibFYgHbtrFtm2AwyKLFS7Btm8OHDzMyMsz73/8BVFXhF7+4k7NnzvCxj3+CSrnMN77xdW54z3tZ4Hnu1o6ODm1wcLDMC8i8AitXrZruvXAeXfcZGhoioKsYhoaAgCipbNx0CU3NbaiaRjKRIJfL8bvf/o6dO3cQjUYJhyOoqkq5XKaxsZGiaREJBaiUy+iBEA2NLah6lLUbNvKBD7yfBUPDU2SzGSKRZmKxOOFwGM/zcByHSqXCV778d0xMTNDW1k6pVCISifLb3z7E888fobmlhbVr1/Htb32TmZlJVFXjIx/5KE899RSne06yYuUqOtrbuTg6wnPPPUttbR0HDz5Z+653v2fJbbd98zQvIPMKPProI89v2rjpfqBr+bJl1RcvDhMKxVi9Zh1NTS2kUilmZ2fJ5bLMTE8zenGYYEDmuuvexFe//i3i8Tie5+J5Lp0bNnD2bBdNzQ1s29WOZZUZHR1hfn6e4aFBHMdBlmVa29oYHBykubmZcDiMaZqoqkqlUiGfz3P8+FFKJZOa2jpc1yWbzRIMaKRSc/T39bFmzRpqa2KYpQzPPH2Ij370z6mpqUWWJXp6utnWtQ1JkhgaGmTrJVvJZrPMzaU2Aqd5AZlX4OTJU5WTJ0+9saurS6traPpGbW39R+OJJJlMhr6+PubmZpmeniSfyxAOBaitihCPhZmeHMX3IRDQkWUFs2SiyApvf/s7yOVy5HI5LMtCUVQkqUw6nSaXzZFIJmhra+PAo4/Crl3oAR1ZURBFEcsyKRZL1FbHGZuwmZudJR6PEwwG0TQZRQ1z/vx5LNNi+9aNjI+NMzI8SKGQp3Pdag4+eYDRkREChkEikWRiYoxYPI6maSiydDnwY15A5BX6zne+o7a1tn6/vrbuo6FwhEwmzcBgH888c5CBvnN4jkkiFiISDiIAxaLJ8pVrEQT+X7FYlAWCKCAIAoIg8HuqqqIoCrZtc3HsIgsaGhqYmprG8zxURSUQCOD7PqZpkc/nCUeiaKpC/8AAdXW1yLKMpmm4rsfs7DSZbIZwtIpIxMC2y0xMTLBs+XIcx2V2doqyZdHRsQjXdclkMjQ1NTF68eJGXoTIK1QqlTY7jnNjsVTiwvlzPP74AVKzUwR0hXAogCiKuJ6Hqhlsv/QKPvyxz3HTBz/G7yUSSURJQhQlRFFCEEUkSUYURSRJQhRFTNOkr7eXBYIgEE/EyWazaJpKoVBgbm6OUqmE53koik4goGJZFqIoYZol6uvrsW2HTHqeYqFIMBRBURRkSaC3t5eWllZc16NSqZDJZqmtq0cSBaanZwiHw5SKxQQvQuYVyuVyx1VVdeR/N5dKETR0jICGIIAgSqxcuY729g4QRCRZwTRLmCWT34vHYwiAJIqIooAoCICPIAiAzwLXdRkYHMTzfURBoKG+nnwuTzweJ51OEw6HkSSJQqFANBpDEkVURSaXy1EuWwiChCxJWJZFKjWHEYygayoIIuPj42zo3ACCiKJInDp1gkI+j+/7XOi9QCaTQZKkCi9C5BX60pe+ZEqS9O5isfjj1atXDouiSDgSY+36Leze+wYkWWX04hhDQ0Ok02ny+TzpdJrfCwQCKIpCsVTEcRw8z0MQBGRZRhQlRFFgQT6Xo1QqsaBYLJHOpFkgCgKyLKNpGpqmEggYZLIFJEkkFAoRjyfwfB/P97HKFkNDg5zuOUm5YuN7HidOHOeOO/4FQQDf83nuyBHOnj2DD+SyWUzTorm5ZZAXIfMq/OSnP70buPuDf/ZnnxJF+WvRaIzx8TFyuTySJBEKhfF9n1KpRD6fZ2Z6GsdxkGUZQRBIViWZm5tFEEQEQUAQBBb4vk+5XMH3fXK5HD+6/XZc1+W5545ww5++l7m5OQaHhijk88TjMQwjSGtbG6qqUDTLxBMJCvk8qdQ8ruviuD7ZbJaR4UFc18V2XYrFIv19FxDwcT0ffBAEAc/zqa6uIpOZR1G1x3kRMq/CPffcox588smf5XK5t2qajud5CIKA67r4vo9t24iiiGVZFAoFZmZnKBSKxGJRFkSjMQRBxHXLeJ6HaZqkUilSqRS5XI5y2WJ8fIyjR59H13UikShPPvEEhmEQjUQQgHQ6gyRJnDvbQ6Fo4rk+uVyOYiGP73tIkoTn+7iuiySLuK6HAISCIQqFPJ7n49gugiigqiq+51NdXcOpUyfLY2NjP+FFyLwKP/7xj+NBw3izqqoC/x9FUTBNE9/3cRwbVdWoVCrkcjky6TTpdJpYLMqCRCKOaZbIZDKk02kmJiZIpVIUCnksy8LzPBRFpbGxCV3XCQaDRCIRVFWlUqmwwPM8TNMkm01TsV1cz2N8bJSJiXFc2yKbKxKPJ8ikM9gVm1QqS7Fk4boOmUwaQQA9EKBSsSkW80QiEcbGxtB04zsnTpwY4kWIvAr79++fDgaD3ZVKBVmW8X0fWZZxXRfHcXAcB9/3se0KhUKBXC5PPpejVCoxOztHX18/U1NTnDlzhnPnzjE2dpF8PocoiCTiCRYtWkx9fT3p9Dyu69LZuYH1nZ2sW7eeTZu3sHvPXq7ct49Ltm5l9OIEnuvR1NiAaVqEQiFy+SK+7xOJRJmZnSGVmqNklZEkBdd1KRaLBHSVRCKJY9uUinmaW9vRNPWBO+644zP8ATKvUnNz02MnTpzYEAqFMU0TWVbwPA/P87Btm0AANE1HkkRMs8Tjjz/O/v33k0qlSKfTuK5LJpNBEARkWQEfTMskm8sxMztDR8cirrjiSpqam9F1Hc/zKJklfM8nEo0QjUb5xc9/TqFQQhAErrn2OlqaW7jv3rswrTK249LW1oplWUxNXsSxHZavWEW5XKaQzyIIEtXVNVy8OMSSpSv9VatWf79kmrd0dXW5/AEyr9KZs+ce9jz/r0RRZIEgCCwIBAKoqkokEkHTNDRNI5VKMTk5iWVZ2LaN7/v4vocgCKRSc5RKJURRIplMsmnTZtauW0coGMLzPCRZYmZ6mkOHnmJwoB8Egfr6Rnr7+ug+dQpJEunq6uKtb30r3adO0dvXj+N47Nm9h87ODTz04P1kc3niiSoMI8jF0UGscpn16zcxPDxIQ0NT5fIrrvzgrbfe+hNegsyrdOrUqWfWrV07ZVlWnSiKGIZBdXU1mqZhGEFkWcZxHGzbxvM8LMsin89TKOQpFkuYZolwOMKCpUuXsWnTJlpb29ADOiDg+x7lSoV77vk3Hn74IQqFIr4PoihgOy6CICCKAuvXd/LJT36KdDrN3335S1hWhcWLF/Oxj32cu+76BQODA2iawZo1azh16gS5bI6NmzYzNTXFosVLjgSN4IdvvfXWk7wMAq/BzTff/MnRkeGv63qAaDSKpmlUKhUkSSIcDlMsFpmZmWFycpJ8PodtO0iSRCwWpbW1jUWLFxGPxWnv6EBRFAQEJElCEASmpqf4lx/dztGjR/E8jwWSJFGxHVzXIx6Ps2f3Zdxww3sZGRnhb/72C5RKRdasXsunPv0Z7v3lL/nVr+6lqqqaNWvXcurkCSqVChs2bESWleF169b9j69+7Wt38goIvAYtLc3KlVdceXRs7OLaUChMXV0tuVyedHqe6elpcrk8rusgSRI1NTUsXbqMtrY2GhubCIVDiKKI53ogCISCQeZSc5RKJSLhMN3dp7jn7rtIZ3IIgkChWETXNNrbFxEKBenq2sbWrV387Gc/5cEH9yMrCnv37GXjxk3cd9+9nDl7hmVLl5NIJDh/4QJNTU3uJVu2nLRt+3sHDhz42eDQUJlXSOA12r179+JYNPJkJBJtKJWK9Pb2YZomnuehqgodHYvYsmULK1auJBKJ4vs+5XIZ8Fng+2CWSsyn55kYH8fzPEKhELlcjtHRUQqFAvF4DNd1cV0Py7LQdZ3JyUlOnjyOrqu0tLSzYsVKBgb6ON3TQ31DI0uXLmV6eppoNDpjO86PamvrfnrXXXed5TUQeB3s3LGjdcPGjfdfOH9+7cjIMJWKTTgcYt3adaxes4ZIJELAMKipqSVoGNiOjWlagA8I4Pvk8nmGBgdwHAfP8zBNk1wuR8eiRRw7+jxjYxcpFIpEIhGCwRCSJFEsFgGfXC5HMlmFaZp0dHT4RjB4Vtf1g4sXLb7vnl/e89jjjz/u8joQeJ2sWrVKu+Lyy//70ODgJ4ZHhqOu69HU1MS6detoampCURQcx0HVNHRdR5IkioUiU1OTzMzMkJ6fp2SWyOfzWJZF2bIwzRLJqhpyuRyCAIlEktraGioVm0IhTzAYpK6unqXLllGpVB6Zmpz4blt7x9Gv/P3fT46PjXm8zgReZ1/72tcSp3t63uM4zk1DQ4OdlYqNYRhEo1FCoRC6riMIAun5OUYvjmNZJq7r4jouPj6CICJJIuFwmFAoSG1tPRcvjqKqKuFwhLa2NlpaW+no6KCluQVVU/E8j0OHnv7qxz/+sf/dHLz92HWWBxz+vd+39tqHOe052R5kV47PE8nHCOLmBNiUiEYtFKRYAvWmFIeqoqpUhHpV7qCVqJCgF6GcLgpUvSgqKiYVoSn2OClOQkjsFMV27Bh7xuOxPbPnvPde6/vet14OBv6A7NnzPH9LByW8wz73uc/NAV8FvvrlL3957Pz5Nx65evXqeJIk+9pZ+/5qtTreaMwRFcbGxiiVSpTLKc55arUa1WqVWq2GiNBqtejv72dkZITR0VF27NjB3n37qFZr5HmGc54QcmKMbNt230N0mLCG9u7du+mLX/zipUtvvlmLMZJlGWZGnudkWUae55gpZkYIEVVl69atvP/IUcwUEaFSqVKpVMjznDzPiTESQiBNS63PfvazA88880xGhzjW0Llz525MT0//c4yKiKMQQsDMcM4hIqgaqoaI4L1nYWGBQqmUAkIIAeccpVKJWq2GCHcYzVar8vm/+/z76SDHGvuPH/zgK+VyutpqNVFVzAxVRVUxM8wMETAzVJWFhXmyLONtRpa1yfOcgohQKqWYgamyuLj4EB3kWGMnfvjDt27Pzn7fzIgxIiJ47ymVSqRpSpqmqBoigqoBwvWpKZIkQdVI0xQzxcxwzuGcw3tHuVxBzR6jgxxdkLXb/1Ct1VREEBGcczjn8N6TJAkigveOcjnFe8/161M45/DeUyqlOOdRVQreO5xzxBjYtWvnA+Pj4zU6xNMFExMTNx95+OH9zrlxM6NgZqgqMUacc3ifICIUsixjz549iHOoKlmWcfbsWV555RWee+45piYnGR8fp1RKy8PDQz86ceLENTogoUuWlpe/NFiv/wkgZoaZoaoURISCmaGqNBoNbs/eZsOGjayurnD48GFCCHgnIML2bdv5oz/+MKrKkSNHPgS8QAc4uuTrX//6z4ZHRk475zAzRAQRQUQQEQpmRowRVeWty5dJ05R6fZCjR47wwKGDPPjgg3z84x+np6eHW7duoqqEEN9Dh3i6pNVqsWXz5huDg4OfUFXMjIJzDuccZoaqkuc5eZ7Tbrd58PBhms1V3rp8mb6+fh544AE2jG5g2/btFMbGxgghHxkZGf7HU6cmlHdYQhedefHFn/T397/W29u7n19rNBpcvforqtUaKyvLtNsZGzdtZG5ujuXlZQqbt2zhkUcf5cL585TSlN7ePvr7+gghUC5X+mZn534PuMQ7zNNF09PTevypp1qLi4sfMTNCCCwsLnLg4EHMjHq9ztGjH+DatWuEkLNnfJxyuUye55w5c4bRkVEuvfkmExMnmZ+fZ2hwiEuXLsnU9an/efnll9/gHebpsitXrrx+8ODBPzWzwfPnz7N/3z4uXjjP6mqTpcVFGo0Gjz32XiYnJ6nX66ysrDA9Pc2rr77KzMwNnBMajQZXr17lypW3eO3VV5m+MX3yypVfvcw7zNNlN27c0B07d2b1ev0J7lhcXCSESH9/P339/WzatIml5SW2bd/OSy+9xP8+/zznzp2jPljnM5/5K07+9KcsLS1RqVQJIRA1srKy+l9TU1Mv8Q5zrAOPP/7Bb3nvp3p6exkcHGLnzl3EGMmyjBgj8/MN0lKJLMtYXlkhhoAgFHp7+1BVNm7cSLvdJssyaj21Nh3gWAc+/OGPtGdnZ7/Q19tLCDkjIyPEGPHe0263WVle4eLFN8mzjDzPaLVbqBkXL1wkxkiMysDAACEEvPfxvq33naIDHOvEqYmJb46Ojl66PTvLysoKPT01QgjU64M0Gg2uXbvK7NwsWZaRtdskSQIYMQbMjFKpxO7duxkcHPzOt7797Qt0gGOdeOGFF9pXr13768F63V577ResrKySpim/+MUr1Go1RISdO3cRQs7U9SkqlQohRlSNQrPZbM/PL/z9j5/9yZ/RIZ515OTJkxcOHDhgS0tL719cXCRJElQj169Pc/36dX72sxdoNls8/PDDbNm8hWqtxuzsLLdv3+LAgYNnn/7a157MsszoEM86c+bMmZPvfd/7ZsXJH87OzrK8vMzc3CzDwyMcOXKUxx57L6qRUilldHQDN2dmuHFjmrm5xmsXL178Lh2UsA7dunXrDVNlbGyMSqVCrVbhU8c/zZEjR3j66adxzmNmOO8QJxScc3Rawjq1urrC9h2HGRwcIk1Txsfv5y4zRISCAN57BEFE6DTHOmVmgNBqtVBVwCioGb8hQsEwRIROc6xjZkbIA1Ejv2GGmVEwM0wNEcdacKxHZiYiFNrtNhqVe8wM5xwFU+Vthggdl7AORdVNzjlUleWlJfI8YGYUzIyCiCPGyF3GHUKnOdahxtzcoPcJ3nsWFxfI84wYIwUDRASfeLz3mBmIsBYc61Ae8r31ep2eWg+tZosYI6rKPaoRUyUtlymIsCYS1pljx47Ju8bG/qBcLpMknhAjUSNZllMQwDmHcx4MEDBjTTjWmW3btj0xM3Pjvi1bttBoNIgxIgh5nvFbgvcecYKZIcKacKwjAwMD/tbNm1/YvHkL+/cf4NzZs4QQ8N6T5zl3ieCcAwEzAwMz1oRjnRi//34+cPTo1xYWFvYePvz7iBNuz95GVSnkWcY9ZoZGpeCcQwScc3SaY5145KGH/mZ4ePiTH/3ox3jk0Ud59sc/pt1uk2UZzjnyELjLjIKIYGYYBgjeezotYR14/IMf/GQI4UufOv4UO3bu4EcnTvDGG2+gqsQYERFijBTMDDNDBMwMQVgrCV127MknP1arVb/x1Kc/za5du3j22WeZOHWKpaUlVJUYI4U8zymoGQUzo2AYYKyFhC46duzYuyvl8nc++efH2bFjJ8888wwTp04yPz9PCIFCCAFVJc9z7jIDDDMDAycOMwMROs3RJcePH+8V+N57Hnywsnv3bn504oc8f/o0jcY8WZaBGWaGasTMUFXuEXGAYKaIgHMOMKXDHF0yOTn5lyLsOHToEKcnTnHmzBkajQZZlqGqGMY9ZoaqUTAzVBUwzAwRh5mBWaTDHF2SJP7JsbF3kSQJp0+fZn5+nna7TYwRMApmhqqiMaIaKRgFw8wAwTlHwcyUDnN0SbVSGTdTLl+6zNLSEiEEYoyYGWZgaogIpkbUSIyRQoyRPA/kIQCGiLBWHF0SQrAsy5mcvEae55gZSZJQMDMMQ1WJGsnzgJlxlxkxBkwVVSPPc8yMGDWhwxxdIiLEGMnznIKIYGYUREAQzIxSqUSSJJTLZcwMRADBzFBVKpUKpVKKiHg6LKFLxImoKmpGQVVRVUSEgmEMDg7inWd1dZU9e/YgItSqVXp7e+np6WFoaIj+gX7MFOccneboEicO5xymiplxj6piZhS2br2PSrWKasTMKBhvM0BEwLjLjI5zdIl3HjMjxoiZUTAzCiIOEWFxYYE8z1E1fsOMuwycd5gZa8XRJeIcIoKIICL8LhFBRLg+PU2e56gqItxl/JqAcx41o+C9a9Nhji7x3ovGnLy9ivce5xz3mBlmRqvVZGlpkcLMzE0KMQTa7TZZu02zuUqjMUcIAVVdpcMcXeK9+4YTBXF4nxBj5HeZGQVVRUSYmZmhEEKg1WqRZTkalaydoaqsBUeXzMzc+rdytY9arYf9+3azZfMYAwN99NYSarUqlXJKmqaICCEERIR7nHOkaUq5UgERqtUqWdb+JR3m6ZLV5uqNQ4cOHawPDm0d3TDmW62MUimlp7efbdu245yj3VxheHioVSn7pFRKGKgPcf7869y6Oc1gvY/pyYu0Wq3/Xlxc+Yuz5/7vXxYWFpQO8nTJ0tJSfP755/91x/bt8ec///nR6enrfOWr/8SLZ15kamqKCxcu0Ndfv75x09gnEP+Js+deZ9fOnRx64N388pfnefxDT/Dv3/9PBuoj3/nu9773zYWFBaXDHF3mfXKlWq0wOTlJs9UixkiWZzSbTXr7eptqlpgZIoL3HjPDzBAEM8CMteLosixrrZqBqqIxUtCoiAjDQ8OXMON3mRlgiBMKxtpxdFl/f3+bO2KMqCpmhogg4gghrKoqZoaZYtwhghmIOMBYS44uO3jw4K0QAoVGY54QAmCIwM2bN9vtLKOgURHuMAMMEcHMAGOtOLrsU8efej1NUwYGBpiYOIX3Hucc3nv6+/tm8jznLgHjtwQwM8pp2bFGEroshBCTxC/t27e/Ly2V2Lt3H3me02w2WVlZvbB5y2a9OXMTVUUAM8MMRAQQfJIIa8TRZWmaxlIpPb9//36GR0YZ3TBKpVJh+/YdNFvNy0NDwxTMjLcZBecdYNyhrJH/BwKSERxNpdc9AAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};
