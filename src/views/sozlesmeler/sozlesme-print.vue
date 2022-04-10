<template>
  <div>
    <div id="sidebar">
      <div id="outline">
      </div>
    </div>
    <div id="page-container">
      <div
        id="pf1"
        class="pf w0 h0"
        data-page-no="1"
      >
        <div class="pc pc1 w0 h0">
          <img
            class="bi x0 y0 w1 h1"
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKgAAAaVCAMAAAAoeAdNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAQfMAc4PSMHABA2VwAvbAAudgc5aQY6dxY7ZhU9dyM+UCE+bg9bOxdfORRjOQNKSQdJWgpVTAhUWhhCWxJcShVVVwhIagdHdwRQaAtRdRdEaRVGdxJTaBRRdxVhUBtjYB9zZiREVSZKcCVrWS14XTR7TTF8WCZrZC55Yj9hbzNgfTB6Y0lfdlJ3egQ8hgM8lBc9hhM/lgA5owAA/wRIigBIlAhRiQZSmBVIhRRJlBdThxdUlQNIog5OsAdTpAdRtBRLphNWpRhasR1gpyNJhSNLlSZWhyRZljRYizZckyJhhSVgly9/izhkiDhplzdwmChmpi9xqDdqpDVpsTlzozR0sUZoikRqlkZyikhzllRthFNsmFVziVZ3lkdqoUh3pUZ6tlZ5pjmLMjuHSDWEWDWDZD2JfFObG0aULkSTOlyUKVmaNlmoDVurGV6yD12xG12tJlysNV2wI1ywN2WbK2iZOXCfP2OuHGWxDmKxG2KuIWinNWOxJGayM3GuL3OnOXG1KHO0NkaUWEGOYkOQYUqVdFKfbFifc1mpSFmoWFyyRlmmZVimcWycRXGcSXKaUWykRGCmW2OxSGKxWHamR3uqU3ixR32wWWOtYn+kYXHELnTGNwD//0iImFqEm0uCp0uFt1iJqliItl2Sq1uVulmmh2aImWWHp2OJt2yWqWmZuXePpnaZqnabtWuhvHqhqneiuFaOwWmawmuiwnOjxHW0yXq36f8ACISrWYO4S4S0WYWrYom1Y5K6a5O5cI/DZpTGapvEc6PJeqjSeISZrYamt4uzy5C26qW5zKS+2ZrAg6bJh63Lk63QibDMkLDRjrXXmbnVorjkirnil5nD2JvJ6qzL2KbM5KnT56jX9rXM57bY5rfZ9arh/K3x/7fg5rnl+b30/8Hcn8bbp8TfscHincbwnsfnps3pt9LmtNb6rdn5u+L7vcTX7tfswdr3w9/408fh7cXq+sr4/tTm7dfs+df7/uf9yuv+2PH+2uv34+X8/vT96P7+/gAAAE1T0MIAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAABYkAAAWJAGbFcYUAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjEzNANbegAANsRJREFUeF7t3Q2QnPdh3/fURYPDiR1bFm0seSvK5dbVuGl6gN09YAHCrJhCkOxUtKuqomWZotlInYljCIeT6fPdLQWLUhrArBjaATWZcWNbjGpZCEFBoNqqsuixVOJk1y+xMxQgkXINx2llR1GU3oVLgAtM//9nF28U9eYhmd8anw/u9uV5nn12yZn9zv957tln/8p5gHBCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIJ1RAPKEC4gkVEE+ogHhCBcQTKiCeUAHxhAqIlxWqZ5ZfWEvLB7+n1Z3jkt8e/6+HZFddqP4zobrCyfH/ekh2dYWqL1TPZkTFJLjaRlT3v1ibftu/4ucb8HWW/TqzvwmX1mRExSS4ykZUffuonsWIiklgH9VVzoiKSXB1hWqxf/BtL06omu2zixfNja+rLPW1Fvw6s78Jl6/JiIpJcNWF6sUbUTUtuBiEb7gxX2fBMvsbXtXXNlqTERWT4CoL1fKLNaK6zPPUlReIERWTwIjqhfIX6tOLFrWLT2RExSS46namvygjqnEGLtbgG+rPsx/0LGX69m9sRV9Ps5ILazKiYhJcdaFyeMKVhIpJcHWFqv+ihWo8YHleRkAvKKFiElxlI6oX869+L2Slnr9VCxWT4KobUX13e/wOfSGUfox+XgTP07MIFZPAiOqF8YL26sKan49nEComwVUWqvkXfB9VjccLl6gLnr9nEComgRHV8+vKgrygxXp+Vi5UTAKhev5cXo4XNFHPJ6FiElxloXpRz54wAeMpoWIyXF2h6i+8sKEa1eMFH01deILn44mEikkQFqrFmpO9S3v75WplZXl5cam/d99SnVpuLSzs27dU5qxU999/f1lgpS64vLRvaX5pae/ddy/MP7f9+xcW9paHvrjHUU0EoWISxIXqncuLv7j3F5d/6q4HHv31Bw4vLu79xVKYkqylpX0Ldy/t27t35a6V9973yS98+ctf/sKj9x048FPvW35Xadn84tK+g/ccPHTRvc1PVSbee+jg3f3FxXr2hFcK1RWEikkQuOm3uDi/ctfvffHMuWfOfuHRAyvzC3ViGVEtzc+v3L3y8U/+wZfPnDl77vwz58oCZ/71H/7+A3et9MuYa7F/8Dte/vIbxq6/+O+Gl1ff+rf7ZQC2+AJv+k0gZ09gEuSFarG/sPITv3dmeH5YJvybB37hJ/rLK8v9smW33D9w369/4dyZc+fPjZYeO/vl95aArSzvP/SybjXXXF40933lovUf/0J/voTKqYifzYiKSZAXqpKklfeWGlXDZ758188uLq80e6eWDzzwL86cf6aZcbnhuaf/aQlVf/+9Ly1ZGiu5KsFqruq91lvvfnvp3fM5otp+4WeyCRWTIC5U/X377l75jbPjCeefPry4WKft6y/f9amz564cS11w9l+WAdXd+++tI6rR269eld/x6Gqu9e2H5pf683/Z9lH5qx9Xi7hQlbHT/Mof1iDV32fOfHxx8WeX3r5vYf97/3A8zLrMeCvw6Y8vH1he3n/v5vGbb2T8Nt5WwrT53Qfn646uF+EjNJPGPiomQVqo+kv79i2sfKyOnWqDhmcOv2vx7Utv788/8LvPjKddqU785z+13F9evLuMqMbvvlGkRifE7HZ3zX3Xof39uodq6Xn7Xr+65udjQPPvnBEVkyAsVAt1H1V/5b1/dnaUpDN/cP9Kf+/PLC4f/t3Ld07VTcC6r71x7uzH61eLLq5cFqrLbe9ufus79i0tL/3M4vN/ZPrEx0qomAR5oVpc6i+v/OYXS4uG58994Sfunt9bIvNTv3NmvEhRG3bu0vDq3O/eVzrV37dSd6aPKlQud+0qP9Xcza1vP7R3aamsuB6Z/t3PU6j+UgynCqFiEuSFanmxv3z3yif+8My5c3/+eweW66bg/IH7vliqNA5TrdSZP//TP/3zp+vA6vy5P79vpb+wsDC/cujbr7tu8+brWps3b261arNGe9K71731YH+pOdD9Bf2s39dY74V9/IHso2IShIWqfiJmsX5k5vD9zWdkDtSd6/3Fu/7VxUidP3/27Bcf+Dv3H1hZWTn86NNnz539P+8qbStxW1hZ+fmfP/Tzhw79w0M/f+//8o9a28fjq+53HJovq6yHt/f7PzfeR3VTt1zvKpuFc3M3d1utcrNuI9bf7tz27d1t27rby78ys0zZMff937+rVm/uv5zdtr1bbtaL8pBumV0X3Nadu2Vuqt1tdtzfXNdfBnKNel0e2N7YSh2BGVExCcJCVQc+8/19ywfuu69kqn6ib6WW6hNPjxcoA6hn/vTRleX9zWf8Vlbe+ztf+MLKO+sgbGW+bNiVSXev3D2/cvfBe1/WGo9xuptfebD/9uZgrMt2pnc/cKTWqVv60e3e8KYmVN1u6UrJUjMAaiaUuWVKe9Sbmp1dZdauLbc0qxi3qOrOzT54+vPt+sDR1F03b+815SuP3PHjf7T2pvEBXXmEikmQN6Lql9HRgX/2/3zhC1/4f8vvP3vfwr6FA5+6cFzVM+fP/f59ZZzVXyjjo+Xld60cvu/w4Xct9+eXy4SlMmVhvmwF9ucPvu26Jg0lG9d/y9/bv1wHaQv98rDxiKrbWhvsmd1RhkC92bnW+tEybao7292ya252666bb966Zcv3v2pLM21u14526U936qa57q7v2zXVvWXLjtlmrHZLtzv7X3Vf9X27bt5RVtK+c9De0itrKFN3vLosMLX1h8uobddcb6rXHryuNi+SUDEJwkJV67O4tHy4bNKdO1t/n37f8sLCyp9e2PI7d/ZPD9dE9Zfna3f2lptlCFbiVoZL5ZF1ztLS3oX9P/9do2Oqynho8ysP7e+XhpWh2WhEta1ML6Fan+lNd1o7d7db7cGxXrfX7r2m15vr7t699Zbu9NRrduwok3bu2VlqtXvPTWXrrXdTr/uq2U639+rdZelW+a1XN+3eMbtjtr31Nb0fG8z09rS65WF7dk73uq1Oe2rnnnav2y5rKaFqXs4Lq7Rw9PPNEComQVioaoSW+gfuu3hk+tmPlUHS/eODFUqonr7rwLsWf3KpDo4W9u3dt/cXl/oL/f7efSVbtVL16Ialfe/4hXuum50rI6Iaqlfce7DuoqoJW166MKKa27g2nFkbnDq9Pjg+NRgM1h/ZeHR9MDi6c3V97fT6zk6ZdLo9c2ywPuhOfW598CfdjcfK7OMbB4OXr5dHvn9wpN3+9HoZKg0GazP/eDg4tr7n9uEfDwafvXbjn5Rpg9a29cGJ8uijG9u/Vh44fFFC9RciVEyCwBHV0uLK37+47/zs+5aX999/oVvnzv3T983v27e3Xz+6vHffvjJ62ruvP19u7asjqsbS0sL+Q/9hq9nsK5267pX7714ooaofbL60j6rbXhvMtJ9Yf//M6tH2zPDETHvT8PZrf3XQmVn9tyfu2Hzyj1/ynw9+6eWDH5zZ3L510NnUa982+Gsv+fB6WXTwI52Tw5n1kxs6w2OdkydvfMnJx7/zW4YnX9/5peGJzo+UgB3pXPtLw6PdsuSR9upg0w2DozMzZUR1Yfd6GqFiEuSNqJZqqC4e3Xnmgf7CygMXB1jnHl0ZRWmxv3f+7lKfeqRnvwyp6sZd2bprHr//0FtfVsKwa+6WLbe0vu3Q/MJSPd1eXXF/4eD3XF/fniVUw86mk8NrZ06c2LxhcGKmtTos46oaquFMq/fMcDgYPnTtYPDBDe09w/Nv7rQHZcpg0N4w/NDMhtXBta8bdh4b3r6xLHV+fXDtjcM7W+3bB9dc01lb6+3edM2nh8daM4OTMzNvHF77ubLOzos0ovqL7AcTKiZB3oiqHvJ0aUT19Pv6S3d//OLdMw8sL+9bKNt5pU7zy4dX7j98/+EDB1YO1KHU8kp/oaZref//9IpSozqC2dV96VsP1t1WNWOXj6jmptYGm9ony6jqoaMbZwYPzWw+NfyxN972ul7v009N97rDD775ttteM/O6YycHr23f/tjJtc7gSz/6xjfeuqM9eFO789hgZuaPf+u3BjOdwa/+9Te+5fXtTYP2ztbtwxs3ddY/P33i5EMnzh/rTg9PbC7jsJkSv00lVL36pC+sJlPf9E4qoWISBIZq38KVI6r55U/UUDWxOvP36/wSquZYq3/59NNnzjxdfPGTK2VKf6H5Y2D/0N+9rolRd262+2337q/Huo/3YC3VEdVo3un19tSpQbt34siezcNjN/Q2DDudjZ2pLZ8eTM9t+fxTm3a/emrPTOf9w4/MXnPjiT/p/OpwQ2emN9sb3DG7dXW91T42fOqadm/tqc70q2e704Pd3dabBt/S6Qxm9gweKgsfm9qzvrqx+5b1mePDDTOrgze1bn5Vfdo8QsUkiAtVPW5q5b4LH5g5d/aBlaXLQvVv7isDo4WFsjG3uHzXffXQ9ObfMyVUi0tL+/bVHPUPvqJV34L1EILWKw/WRC02oSpbfxdGVLtm1watrY+vd7tHj7RaJ9c/94H26uCzp07vnP30Wm/LrtvX1k6dfn37s48PVtvdJ0+uH2nPnHzq1Kk/musNbu3WUHVfP3iyvbV1x/rab3/+I63OYGe3e8fg5GcH75+ZXl87eXK49r/NDo7tnHvDYPOmk4O1Y4O1jzR5DCRUTIK8EdXCwvzyffWMLk2Zzn68jJEu7aM6+/F3loHTQtmYW1w+cPjiHwPP/1+H65/7lkqoFpfm73lZ6+ZuPVx8rrv5782XRi2WiNXDs+pn/cah6s60et3NO7tz5arVbrW29Wba7c2bt81NtUvlZmZeOrPxhnZrc3u6ta29sd3t7mxvat/Qmmtt3tZqtTeXdbene3PbZ7fOzFzfKlNaN3Vvard77fbUjo29jTMb2rM72u3yTO1WrzxwZmZDreYL7rk2+r7e8woVkyB0H9VlI6rl/sr9z1wYUp35/cPLC81f+Ep2Lh3E8MwnmwlL5aFLb3/Hd9VENe/C1n96qO60qnPKcGupftZv/Fe/Ky5Gv+WyOZCzmXhJnTu+2Rg/rtccdV6vxpqpzb1utx4i2jyouddc1fn1AbuelY5mybrQ+H5VHzKePL4zXqK5VddSb1TjBzynZn75Lct/jQWFikmQF6rlhcVLoTp/5mPL/fnDF++e+9cPrCzvG+1yeueBZnLtVwnVYv1T4NLdZbPwns2jd/hc9/pX3LtyYatveXm+xuzCzvTx2/crsnHF1bM1++eby1EFmqt6r7nVXDa3r3RxidEjn7XMaJ3jWRc1zzJ+qtHc8QIXnm989+uqy9f/0q+6vFAxCQJDVYZFF/dRnT97uL/UX/mzi9t457783vc1m3Jl2++nn74w0Cqhqh/0KyGaf8c/+O7rx2/j7sv+k4MLSz9Td6XPL++vh4QuLd8/3pk+evvWBevdUrZ6vaMp3I7R3PrvVXWBi0rb6k+9qB947m5vrkbzLhWrqqsdD33q3dHFOFTjBZvBTr1Rj6NoVjterrjwLPViPHekzqyP2rXr+y7eHf8b3bywhmZCs0hd+rLpX0GomASZobpsRPXx5cWfXfndcaiG58+d+8J9d71zuX5D6TsPXDpg/VOjUJXB1sF7X17ff/Wd2XrFPT833y9bigv737H/HfVvhf2LhyeMNe/1y9S9PM95JEGtxhW+4r1/+YQaiCZUl0+sN8v9OmM04ZvWvIhtl6/zK4xjtf1CqZqJRWnrcx+7IFRMgsBQ9a8I1eEyflr+jYv3S6m+/Ot31e9IXvnp8T6qUqu6j6oJ1dLSwf9h9Ce/8tZs/Uf/46Gf+wcH9x+s3lH/UnjF+aiuHARd1Eyt8+p7vmj2Qo06VSdW9f7IpRKMCjG6e9nU8VOMr0YrvvTwqlljXfNooQvPdEmdXq8aZWZ3WzNldP851TVsrx9pvOKJnptQMQkSR1SX76M6+7F6bMFd9bx5F5w79y9+5xP333X41y+d9bOMqEYHn+9buOel42Tsmtv2X7/trW9729ve+ta3vu2tf+u/3182Fi99r99N3W6rN37711FG7cNoANKrI6pRDLbXTbteb5yqZrVlQNNqzoQw22u3L+1Jb1Iy+tjORXXK+JXUE76MHl+fsk6oC86W32bzsQySmutm6mgV3WZyXbw5LVa50eqWJ2xe4+hZy8zyOkZLj93cjJvKtLptWl/76JGj669CqJgEmSOqy/ZRPVA/+nLgY83uqAueOf/MmeLSpAsjqsX+/rdeX9+b5R24a1e3dV1zys/N17eu+/ZvPVQydSlUU6Uz7VarN1UjUotxIRLd9tRUecOX2zfv2jI7d8tH19dbvbJA856vM0oeSit6vc0zM9fOlBLVwOyo53xptVu3bLmlFKIuObdrtvtD64Pjs925LXVmbUr3v+v91fYP1QFf/dqJm8v1LeW3WXU9297OMni7ubn1N+rnqbeXhxazoyHWrrmd/+v6+p6pEqPm1ZaHbKlrGN25eXQ1e3OdtH3H3N8o07v1sInyyrrtnd0dt4wfVF5GfXmXESomwQSMqJbKkOon/qDuj7pYpnPDc+eaQxbGnhnto1pc2n/vK7Y159lsdLfVMxLXe93N33Hv/n4N1dtGoeqdHqyvrx/9oZ11WFWGV83i27u7etOf+Vy73NtR0lAD0X3T6mBjGTqVN/6O7pa579tSK1je/a319XqWhHarjHR6U92/uf7Rqfb68fpsrdaOXklOd2u7vTo40q5/cKsTu3Ozj5w+Mv3gn9zajJPKU1blGV41N1tWfUtZ5edWu716CqzelvLMs3Xmjgs7zMoqW798etBpT5Ws9cr0+mK2lMuiuRiP3hpTvebvAd2dq4PeXK/7j9ff0Ex+dqJGhIpJMAH7qPrz/cV3Hb70h7/R989clqmLI6rF/sF3by5v1wvv2KoOZcrm0vUvu3f/ZSOq3vTaoNPpDAYbZ8u4qt0rP2ULryRma+fJpzrTO3ZPTU+VAPR605t+tZ49oZ5+ampze+rVr253Nu75q6VU3ZmZGwdrG2/Y2d7c2t3e1Gl3OsMTG8s4bfPMxq29dm/3xpnXvmn4wZkSud7sDZs37+ztnrl2U+fo4K+9Zrbd3lSHc7UwN/W6G3fv3tCb2jHVGayWdb2mjPRes7VXVrFnY3lNu8vFjvLc073Wxs8P/73OntZNvV5nqr7c3vTUq8vl1M5yb7o8cae8yLq919vQ3jg7t+uWHa1jg1/pdadX19uzuy7/X3IFoWISBIZq3xUjqo8vL5RQLa48cFmpLhtaja8+Nd6Zfk89A3FRN9HKe7PuDSrXZUxz3XdcselXT/Nybdl2W3+8DJnWP3Ok/cufOVXa8bndtz3x1FMnb20ffXK9BOPoqcFnOz86/NBn11d7re5HT6+t/sCdj5/80JO7t9Y1zDw0fFOve+Tk4PEHO6unPnjNycHaqTvbq2uDU2/p3fH4ydtPvfbNw9968vTxrdN7VtefPN77tZNP/OgT/9/wyVO9W1cHn2+vfuYzrd6vfPbWmdWTq8fWTr2xfXK4dqo9c+Tx4eqd06unHl9d+6XVU0cfH6xuat+6unb6aKv9+X974rN/8sjGX1797O2rg9XO6vpqp9M+enp9ddOtq6duW1373B29qZLF46cHq3fULc3envXV9tYb1v9Ru7zcZt/6cwyqhIpJEBaqpTKgWlparmdPqF+IVUZUD/T79bjyMsr6s3OXf7XfFc785sry0sLS/C+88qVNlsZvwjqUanbw7Jprfee9K4v1yPSLoRrOdFudJwetwafbGwa93q2D9nRn8Nru9Je+tLF7ZHjn9HT70+vtsh32xuFab+eg0/qjp669dv2jM53B2g/Ozt08t6W3afDpXvfBwUObjg32zAyOzXTWHmr3dvxwuzN4YnZHGaz9+Oyd59fbdww2TQ9PtN80eKR1ZHh7++j5Tre3vnrt7i07jg3aU8cH7291hoOd7eHq7vb66vTWDw4eLKOu3btPrK3OtjvDp9rXDu6YPrk+01nf037i/Fr71mG72x4Od3aGww8+OHhs02PrnQ2fPb1zZrD+YOfUoF22UPcMr9lQ+tvdteVV3c8MNkx/ZnBt6/t3NV858VyEikkQFqp6UObS0sp7L236faKMkxaXlhb7Kw/8wZmvUqpzZz9ZT0TV3/8PX3Hlt7o36p/Z6kHqZTxVQjX6Xr/uzrVBu9vdcHLYHj529MTgI7O3DTe1Nw1LRb70pV731wa//QPXtAerG3tzc7een+5uHl4zs37yoWNrn9+0YXBbe0d3+1yvMzhZNtAeHjx2YnXwYBOq4dG6Rfb6f/LUU63uNcMPdbe8+fxDvZnBEx8cnFz90OBo9+jwju6J4W1z3cHJX53+3u6RwfTuMqlVItWbHj45Vfo13Ts2OHbk8fXj15wYtktch53y+Ds7w4eOHTl9evrz5zd1O+c3dNvnf7w7M/zS9A3DxzasDT784ZOD6c5TT7Y2Hx1Od+emjj1x4rHV9c3N3y7bw9s75ZXVM7k3/yueg1AxCcJCtTgeUV0K1QN1i25p397+ysrKx56+9Ke+ej06d0IZez1dRlTLKwv3v+3br99+c7PR1+xfHitvx+7LXnFovn7W7/7xAZ/NiKp34/Dka4YzmzovaU+9cTizZ+PwLbNbn/hS95b2X18b/to1ww9f257q3T7c09s87LTXH+tcO9Mu46WNZeuy250+MXjjpl776PDGGzd1OiVUZc6xDa2NpwdPDp/as7Uz3NDdUUK1sTP49GPDH9uw4SWbu782fEvvxPnX3jJ7zepg8OqtH17fdM3R4Z29DcOjO9vnn5ieHpzYM/3QcMNMeZrdq2vtufZ3DjplRHXnNXV3WtnK+/xwT4nUphKpjb2XDh/b/YPlJQ0fu7Fz7Yb2psGJVvtEae9NU8ceu3FD54Ybev/Bjm63/dvDE8M7drZ2ftVO+V4/JkLiiKq/fH8zdqoNOvOxdzahWtq3+LOL7zz8yX9eWjVadqSUqnTqix9fqd+Gdeg7Xnp9d27btiZP2+rhSc0xSsX1L33FvftLBPsXNv1aTz3V2XzrE1/a0Bve2els6vVeO9w0/VjpUfuJtfbUzEtecnJQhkwbZlpb7yjDrPZw08zgZO1Ue6bUoGxg9d4yeGxDpz19bPCjm8qDZtbriOqhzqbVJzs3PvXUdPua0sG5Nw//SfvOwWvfPHjsmplr2606fDo6vK3E7sYPD45PfXi9nmP0zo2d4Udb08NTva2Dx6e3Hh3cds3MzPTWGp3utYNN5fnuvGb40DWd0szPDzdua9Ut1mGvjPGOt28o6z05uLGzcXd701NHWzccqY/Z9vDJGzulrzc90ut2e0cHZbjVu/WX6x8yn5sRFZMgLFQlSv19e5cPf/HMM8+cOXv27NP/6v/42WaUtbe/9JNLP/lT7/rp+x6tw6rmG92rs2fOfvGT7125e2VheWXlb31b/Y7k1nWbr7/+usuVey/71kPv6NdNv/GIqnW6nlp4rdPunhisrw3brZl6JuLB4OGNq8PBG44MB+u3zvzIoFy17hhO72gNfqB9w3C4Pjgy1V4vK+jeMlXPTTwcbJwuj1kfTLfXHy4jqsH6h94/OD28fbj2ms6wtOGOev7iY50Np+uRDEdaRwZvar1/bbi+ud6d7h0py58arr1hevDRbm/t1Ozu04P13fVrJQbrvamPrrfmupsH7d7m9Qfbx8orXd/Y/dxgZ3dnidHOQa/8Hu/tXD/R/uBaefrT5bmPtKaODcpjZjeWx6+vdh/+vx++oTtVXt5Mb3Z9vdUcsPBchIpJkBeqxaXSnN989DcfffTR3/iNR8s23eLi4nJzCqqfqaf1XFl57+GPf+r3fuf3Gp/6xOH76heVlrFSv7/8d+65523vefe77yn/3vOeeus973nPu99zT510z9/ePzp7wug4qm73yNFjR24tnZqb+cgjH32wDD5ue+QD7aMf+W/arzv2yE0/9NGHX99qtW99+JGPdF9zvAxNjvS6rVuPPfzw3+z2yt36t8RjR48dO3K812sfOfLwj3dbj7yhO/sDx4/duvnBY7f9wNEy/XhvbtdNR48+8voyumnf8dFHPnDT3A8/8ppu+8gjj7SOHDvS6vZaRx7+yOuOHNnZO/ZD3bkjD5YuHXlka2vzkePHf6W74w2PdOe2t8pztcqDZh786PEj3e5Hym/3aMlkvT7++u62R25t9/YcefgDP9ydOv6Gbrc+Zm57d8+xY8f/29nXP1K393ofeLjVm/vlD4zq/FyEikkQGKr+vvmSo5Kk5QP1aql+xXu/fq3oUlHP8FLLVOO0vPzOxfpTNxeLWrH6fcjF/PL+/Svv2D8yP99c1pPtXToyvdttjw8GLb+j3VjNzXLR7IZu9EqiLswc363qnxGbs+0190aXdWozu93tbd1al57bdXN3/CGbOrO5ceF2s3i9rEeGjic1v/Xg0NGS9XI8sVmwuVkvyvTmFZaL0YxiPKvO21Vfxtyr6orqyxy5+OxfyT4qJkFgqJrz4r2zjKPqNl+xtLS8sNKvXVqo30CzUC4XR2eZqsuUpepJX6o6qTyi9Kg5D8xY6Vwzp/buUqjGb/J6o+7FGt8fz6hXz6FZpJnZFGC06GjKxcdcvFGTUe+NFhktVTVLj24WF2bUr4qf21Y3Kkv4mjmXu/jg4llzL59V1APHSqnqB2aaNTdz68WzHnaJERWTIC5UpUH1hCxNffolTPtG/SlbbeW3qdS+Mmdf8xnk0cRRjkqF6tiqZqo+ts4da6aPXBaqK5S3d32Hl7d281Hei0vUic/p5rrQrrltzWOKetFEomqud33v3PaLh1eO5zSrvrD+i+tubow+eVzXcfHJv+pupa9UD78f37xkNKVZ4cWX9pWMqJgEeaGqX4fVDJSWl+vm2qgwV6gDpn5zdqkaqiZrI/2FccCagl2pRK4J1SvHm37Nu7TRfMhm/I6uxp0aV6Z+nHg848K5CaraqWbzarT0+DGX+95xkIorMtEkqSpTm8fvqmttlh2Harx4t37e8EoXV/mVEauLjueOalf/my481ddgRMUkCAvVfIlJScq+0Q6nMj6qjVmp2antujQ0Gm3u9Uf/mirVTcM64lpYXrl7fnmhTF4oISu/9fFle7CZddk+quZdWtT9Pc37vv5edqa50oQmIPVf7UmdVmeOF+huqwvXs8HUORf6cbkd3fHHVsbGbblsHVc8rllNc+PCtCtW2ryYMqlMu7jkWFnx6O74VdbVl83ZOuHyxb4KoWIShIWqSVKJS7MVV/vzNdWlLsTr4tLNZ/4u07SqNq9cLV04juovu2/8v1GomAR5O9NfSBcP+OQCoWISXF2humpGVN84oWISXH0jqgvfQkNDqJgERlRXOaFiEgjVVU6omARXWajmhepZhIpJYER1lRMqJsFVF6rRGT65QKiYBFdZqL7KZ/2uYkLFJLjKQrVw4cR5jAkVk+DqCtVi/+D3OI7qCs6ewCS4ykJlRPVsRlRMgqsvVEZUVxAqJoER1VVOqJgEV98+KqG6gn1UTIKrK1T1r342/a5gRMUkuMpCZUT1bEZUTAIjqqucERWTwIjqKidUTIKrK1R9I6pnEyomgRHVVc4+KibB1RUqB3x+BSMqJsHVF6rnfUTVfOPev2t/4RchVEyCrFABPAehAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8YQKiCdUQDyhAuIJFRBPqIB4QgXEEyognlAB8f4KwDflfy7l+N//i1FBngf/fl3f13T+/P8PT8jeUYRm554AAAAASUVORK5CYII="
          /><div class="c x0 y1 w2 h0">
            <div class="t m0 x1 h2 y2 ff1 fs0 fc0 sc0 ls5 ws4">
              © iGZ
            </div><div class="t m0 x1 h2 y3 ff1 fs0 fc0 sc0 ls5 ws4">
              e.V., nach En<span class="_ _0"></span>tfernung von Log<span class="_ _0"></span>o / Copyrigh<span class="_ _0"></span>t frei zur eigenen Ver<span class="_ _0"></span>wendung<span class="_ _0"></span> der iGZ-Mitglieder (Stand<span class="_ _0"></span>: <span class="ls6 ws0">17</span>.02.2020)
            </div>
          </div><div class="c x2 y4 w3 h3">
            <div class="t m0 x3 h2 y5 ff1 fs0 fc0 sc0 ls5 ws4">
              1
            </div>
          </div><div class="c x0 y1 w2 h0">
            <div class="t m0 x4 h4 y6 ff2 fs1 fc1 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y7 ff2 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y8 ff2 fs2 fc0 sc0 ls5 ws4">
              Zwischen
            </div><div class="t m0 x1 h5 y9 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 ya ff1 fs2 fc0 sc0 ls5 ws4">
              {{ Sozlesme.firma || '' }}
            </div><div class="t m0 x1 h5 yb ff1 fs2 fc0 sc0 ls5 ws4">
              {{ Sozlesme.firma_cadde || '' }}
            </div><div class="t m0 x1 h5 yc ff1 fs2 fc0 sc0 ls5 ws4">
              {{ Sozlesme.firma_sehir || '' }}
            </div><div class="t m0 x1 h5 yd ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 ye ff1 fs2 fc0 sc0 ls5 ws4">
              - nachstehend <span class="ff2 ws1"><b>Arbeitgeber</b></span> genannt -
            </div><div class="t m0 x1 h5 yf ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y10 ff2 fs2 fc0 sc0 ls0 ws4">
              <b>und</b> <span class="ls5"> </span>
            </div><div class="t m0 x1 h5 y11 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y12 ff1 fs2 fc0 sc0 ls5 ws4">
              Herrn
            </div><div class="t m0 x1 h5 y13 ff1 fs2 fc0 sc0 ls5 ws4">
              {{ Sozlesme.isim || '' }} {{ Sozlesme.soyisim || '' }}
            </div><div class="t m0 x1 h5 y14 ff1 fs2 fc0 sc0 ls5 ws4">
              {{ Sozlesme.personel_cadde || '' }} <span class="ls7 ws2"><span class="_ _1"></span></span>
            </div><div class="t m0 x1 h5 y15 ff1 fs2 fc0 sc0 ls5 ws4">
              {{ Sozlesme.personel_postakodu || '' }} {{ Sozlesme.personel_sehir || '' }}
            </div><div class="t m0 x1 h5 y16 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y17 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y18 ff1 fs2 fc0 sc0 ls5 ws4">
              - nachstehend <span class="ff2 ws1"><b>Mitarbeiter</b></span> genannt -
            </div><div class="t m0 x5 h5 y19 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y1a ff1 fs2 fc0 sc0 ls5 ws4">
              wird folgender Arbeitsvertrag geschlossen.
            </div><div class="t m0 x5 h5 y1b ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y1c ff1 fs2 fc0 sc0 ls5 ws4">
              Die in diesem Vertragstext verw<span class="_ _0"></span>endete Bezeichnung
            </div><div class="t m0 x1 h6 y1d ff3 fs2 fc0 sc0 ls5 ws4">
              „Mitarbeiter“ <span class="_ _2"> </span>sowie <span class="_ _2"> </span>sonstige
            </div><div class="t m0 x1 h5 y1e ff1 fs2 fc0 sc0 ls5 ws4">
              Personenbezeichnungen <span class="_ _3"> </span>erfolgen
            </div><div class="t m0 x1 h5 y1f ff1 fs2 fc0 sc0 ls5 ws4">
              geschlechtsunabhängig. <span class="_ _4"> </span>Sie <span class="_ _4"> </span>w<span class="_ _0"></span>erden <span class="_ _4"> </span>ausschließlich
            </div><div class="t m0 x1 h5 y20 ff1 fs2 fc0 sc0 ls5 ws4">
              aus Gründen der besseren Lesbarkeit verwendet.
            </div><div class="t m0 x1 h5 y21 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y22 ff2 fs2 fc0 sc0 ls5 ws4">
              <b>1 Inhalt / Inbezugnahme von Tarifverträgen</b>
            </div><div class="t m0 x1 h5 y23 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y24 ff1 fs2 fc0 sc0 ls5 ws4">
              (1) <span class="_ _5"> </span>Der <span class="_ _5"> </span>Arbeitgeber <span class="_ _6"> </span>überlässt <span class="_ _6"> </span>als
            </div><div class="t m0 x1 h5 y25 ff1 fs2 fc0 sc0 ls5 ws4">
              Personaldienstleistungsunternehmen <span class="_ _7"> </span>seinen
            </div><div class="t m0 x1 h5 y26 ff1 fs2 fc0 sc0 ls5 ws4">
              Kunden <span class="_ _8"> </span>Mitarbeiter <span class="_ _8"> </span>im <span class="_ _9"> </span>Rahmen <span class="_ _9"> </span>der
            </div><div class="t m0 x1 h5 y27 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitnehmerüberlassung. <span class="_ _a"> </span>Der <span class="_ _a"> </span>Arbeitgeber <span class="_ _a"> </span>besitzt<span class="_ _0"></span>
            </div><div class="t m0 x1 h5 y28 ff1 fs2 fc0 sc0 ls5 ws4">
              eine <span class="_ _b"> </span>befristet <span class="_ _b"> </span>Erlaubnis <span class="_ _b"> </span>zur
            </div><div class="t m0 x1 h5 y29 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitnehmerüberlassung, <span class="_ _c"> </span>zuletzt <span class="_ _c"> </span>erteilt <span class="_ _c"> </span>v<span class="_ _0"></span>on <span class="_ _c"> </span>der
            </div><div class="t m0 x1 h5 y2a ff1 fs2 fc0 sc0 ls5 ws4">
              Bundesagentur <span class="_ _d"> </span>für <span class="_ _d"> </span>Arbeit, <span class="_ _e"> </span>Agentur <span class="_ _e"> </span>für <span class="_ _d"> </span>Arbeit
            </div><div class="t m0 x1 h5 y2b ff1 fs2 fc0 sc0 ls5 ws4">
              Düsseldorf, am 20.09.2021 <span class="ls1">in </span><span class="ws1">Düsseldorf</span><span class="fc2">  </span>
            </div><div class="t m0 x1 h5 y2c ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y2d ff1 fs2 fc0 sc0 ls5 ws4">
              Der <span class="_ _f"></span>Mitarbeiter <span class="_ _f"></span>wird <span class="_ _f"></span>an <span class="_ _f"></span>wechselnden <span class="_ _10"> </span>Einsatzstellen<span class="_ _0"></span>
            </div><div class="t m0 x1 h5 y2e ff1 fs2 fc0 sc0 ls5 ws4">
              bei <span class="_ _0"></span>Kund<span class="_ _0"></span>en <span class="_ _11"></span>und <span class="_ _11"></span>bei <span class="_ _11"></span>wechselnden <span class="_ _11"></span>Kunden <span class="_ _11"></span>eingesetzt.
            </div><div class="t m0 x1 h5 y2f ff1 fs2 fc0 sc0 ls5 ws4">
              Der <span class="_ _12"> </span>Einsatz <span class="_ _12"> </span>bei <span class="_ _12"> </span>einem <span class="_ _12"> </span>Kunden <span class="_ _13"> </span>erfolgt
            </div><div class="t m0 x1 h5 y30 ff1 fs2 fc0 sc0 ls5 ws4">
              vorübergehend. <span class="_ _14"> </span>Der <span class="_ _14"> </span>Arbeitgeber <span class="_ _14"> </span>infor<span class="_ _0"></span>miert <span class="_ _14"> </span>den
            </div><div class="t m0 x1 h5 y31 ff1 fs2 fc0 sc0 ls5 ws4">
              Mitarbeiter <span class="_ _10"> </span>vor <span class="_ _10"> </span>jeder <span class="_ _15"> </span>Überlassung <span class="_ _10"> </span>darüber, <span class="_ _10"> </span>dass <span class="_ _10"> </span>er
            </div><div class="t m0 x1 h5 y32 ff1 fs2 fc0 sc0 ls5 ws4">
              als <span class="_ _1"></span>Zeitarbeitnehmer <span class="_ _1"></span>tätig <span class="_ _1"></span>wird. <span class="_ _1"></span>Der <span class="_ _1"></span>Mitarbeiter k<span class="_ _1"></span>ann
            </div><div class="t m0 x1 h5 y33 ff1 fs2 fc0 sc0 ls2 ws3">
              auc<span class="ls5 ws4">h <span class="_ _15"> </span>i<span class="_ _1"></span>m <span class="_ _4"> </span>Rahmen <span class="_ _15"> </span>von <span class="_ _15"> </span>W<span class="_ _16"></span>erk- <span class="_ _15"> </span>oder <span class="_ _4"> </span>Die<span class="_ _1"></span>nstverträgen </span>
            </div><div class="t m0 x1 h5 y34 ff1 fs2 fc0 sc0 ls5 ws4">
              eingesetzt <span class="_ _17"> </span>werden.
            </div><div class="t m0 x1 h5 y35 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y36 ff1 fs2 fc0 sc0 ls5 ws4">
              (2) <span class="_ _18"> </span>Die <span class="_ _18"> </span>Rechte <span class="_ _18"> </span>und <span class="_ _18"> </span>Pflichten <span class="_ _18"> </span>der<span class="_ _11"></span>
            </div><div class="t m0 x1 h5 y37 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsvertragsparteien <span class="_ _a"> </span>bestimmen <span class="_"> </span>sich <span class="_ _a"> </span>nach <span class="_ _19"> </span>den
            </div><div class="t m0 x1 h5 y38 ff1 fs2 fc0 sc0 ls5 ws4">
              Tarifverträgen <span class="_ _4"> </span>in <span class="_ _15"> </span>der <span class="_ _4"> </span>jeweils <span class="_ _15"> </span>gültigen <span class="_ _4"> </span>Fassung, <span class="_ _4"> </span>die
            </div><div class="t m0 x1 h5 y39 ff1 fs2 fc0 sc0 ls5 ws4">
              der Arbeitgeberverband <span class="_ _11"></span>i<span class="_ _1"></span>GZ <span class="_ _11"></span>mit einer oder <span class="_ _11"></span>m<span class="_ _1"></span>ehreren<span class="_ _11"></span>
            </div><div class="t m0 x1 h5 y3a ff1 fs2 fc0 sc0 ls5 ws4">
              der Gewerkschaften IG BCE, NGG, IG Metall, GE<span class="_ _11"></span>W<span class="_ _16"></span>,
            </div><div class="t m0 x1 h5 y3b ff1 fs2 fc0 sc0 ls5 ws4">
              ver.di, <span class="_ _10"> </span>IG <span class="_ _10"> </span>Bau, <span class="_ _10"> </span>GdP, <span class="_ _10"> </span>EVG <span class="_ _10"> </span>abgeschlossen <span class="_ _10"> </span>hat <span class="_ _10"> </span>oder
            </div><div class="t m0 x1 h5 y3c ff1 fs2 fc0 sc0 ls5 ws4">
              zukünftig <span class="_ _f"></span>abschließen <span class="_ _16"></span>wird. <span class="_ _f"></span>Die <span class="_ _f"></span>Tarifverträge <span class="_ _16"></span>l<span class="_ _1"></span>iegen<span class="_ _0"></span>
            </div><div class="t m0 x1 h5 y3d ff1 fs2 fc0 sc0 ls5 ws4">
              zur <span class="_ _1"></span>Einsichtnahme <span class="_ _1"></span>in <span class="_ _1"></span>den <span class="_ _1"></span>Geschäftsräumen aus. <span class="_ _1"></span>Es
            </div><div class="t m0 x1 h5 y3e ff1 fs2 fc0 sc0 ls5 ws4">
              finden <span class="_ _1a"> </span>dabei <span class="_ _1a"> </span>nicht <span class="_ _12"> </span>sämtliche <span class="_ _1a"> </span>vom <span class="_ _1a"> </span>iGZ
            </div><div class="t m0 x1 h5 y3f ff1 fs2 fc0 sc0 ls5 ws4">
              abgeschlossenen <span class="_ _15"> </span>Tarifverträge <span class="_ _4"> </span>gleichzeitig <span class="_ _15"> </span>auf <span class="_ _15"> </span>das
            </div><div class="t m0 x1 h5 y40 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsverhältnis <span class="_ _1b"> </span>Anwendung, <span class="_ _1b"> </span>sondern <span class="_ _1b"> </span>nur <span class="_ _1b"> </span>die<span class="_ _0"></span>
            </div><div class="t m0 x1 h5 y41 ff1 fs2 fc0 sc0 ls5 ws4">
              einschlägigen <span class="_ _1c"> </span>Tarifverträge <span class="_ _1c"> </span>nach <span class="_ _1c"> </span>der <span class="_ _1c"> </span>in <span class="_ _1c"> </span>den
            </div><div class="t m0 x1 h5 y42 ff1 fs2 fc0 sc0 ls5 ws4">
              Absätzen <span class="_ _1d"> </span>3 <span class="_ _1d"> </span>bis <span class="_ _1d"> </span>5 <span class="_ _1e"> </span>genannten <span class="_ _1e"> </span>Maßgabe.
            </div><div class="t m0 x1 h5 y43 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y44 ff1 fs2 fc0 sc0 ls5 ws4">
              (3) <span class="_ _19"> </span>Es <span class="_ _19"> </span>finden <span class="_ _19"> </span>jeweils <span class="_ _19"> </span>diejenigen <span class="_ _19"> </span>der <span class="_ _19"> </span>in <span class="_"> </span>Ab<span class="_ _1"></span>satz <span class="_"> </span>2
            </div><div class="t m0 x6 h5 y45 ff1 fs2 fc0 sc0 ls5 ws4">
              genannten <span class="_ _f"></span>Tarifverträge <span class="_ _10"> </span>Anwendung, <span class="_ _10"> </span>an <span class="_ _f"> </span>denen <span class="_ _10"> </span>die
            </div><div class="t m0 x6 h5 y46 ff1 fs2 fc0 sc0 ls5 ws4">
              Gewerkschaft, <span class="_ _1f"> </span>aus <span class="_ _1f"> </span>deren <span class="_ _1f"> </span>Satzung <span class="_ _1f"> </span>sich <span class="_ _1f"> </span>die<span class="_ _11"></span>
            </div><div class="t m0 x6 h5 y47 ff1 fs2 fc0 sc0 ls5 ws4">
              Zuständigkeit <span class="_ _f"></span>für <span class="_ _f"></span>den <span class="_ _f"></span>zugewiesenen <span class="_ _f"></span>Kundenbetrieb
            </div><div class="t m0 x6 h5 y48 ff1 fs2 fc0 sc0 ls5 ws4">
              ergibt, <span class="_ _4"> </span>als <span class="_ _20"> </span>Vertragspartei <span class="_ _4"> </span>beteiligt <span class="_ _4"> </span>ist. <span class="_ _20"> </span>Soweit <span class="_ _4"> </span>nach
            </div><div class="t m0 x6 h5 y49 ff1 fs2 fc0 sc0 ls5 ws4">
              dem <span class="_ _21"> </span>Vorstehenden <span class="_ _21"> </span>die <span class="_ _22"> </span>satzungsgemäße
            </div><div class="t m0 x6 h5 y4a ff1 fs2 fc0 sc0 ls5 ws4">
              Zuständigkeit <span class="_ _4"> </span>mehrerer <span class="_ _20"> </span>Gewerkschaften <span class="_ _4"> </span>begründet
            </div><div class="t m0 x6 h5 y4b ff1 fs2 fc0 sc0 ls5 ws4">
              ist, <span class="_ _16"></span>finden <span class="_ _16"></span>die <span class="_ _16"></span>Tarifverträge <span class="_ _1"></span>mit <span class="_ _16"></span>derjen<span class="_ _1"></span>igen <span class="_ _1"></span>i<span class="_ _1"></span>n <span class="_ _1"></span>Absatz
            </div><div class="t m0 x6 h5 y4c ff1 fs2 fc0 sc0 ls5 ws4">
              2 <span class="_ _11"></span>genannten <span class="_ _11"></span>zuständigen <span class="_ _11"></span>Gewerkschaft <span class="_ _11"></span>Anwendung,
            </div><div class="t m0 x6 h5 y4d ff1 fs2 fc0 sc0 ls5 ws4">
              die <span class="_ _23"> </span>im <span class="_ _14"> </span>Verh<span class="_ _1"></span>ältnis <span class="_ _14"> </span>zu <span class="_ _23"> </span>der <span class="_ _23"> </span>oder <span class="_ _23"> </span>den <span class="_ _23"> </span>anderen
            </div><div class="t m0 x6 h5 y4e ff1 fs2 fc0 sc0 ls5 ws4">
              zuständigen <span class="_ _1f"> </span>Gew<span class="_ _0"></span>erkschaft <span class="_ _24"> </span>/Gewerkschaften <span class="_ _24"> </span>in
            </div><div class="t m0 x6 h5 y4f ff1 fs2 fc0 sc0 ls5 ws4">
              Absatz <span class="_ _25"> </span>2 <span class="_ _25"> </span>zuerst <span class="_ _25"> </span>genannt <span class="_ _25"> </span>wird.
            </div><div class="t m0 x6 h5 y50 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y51 ff1 fs2 fc0 sc0 ls5 ws4">
              (4) <span class="_ _19"> </span>Bis <span class="_ _19"> </span>zum <span class="_ _19"> </span>Beginn <span class="_ _19"> </span>d<span class="_ _1"></span>es <span class="_ _19"> </span>ersten <span class="_ _19"> </span>Einsatzes <span class="_ _19"> </span>finden
            </div><div class="t m0 x6 h5 y52 ff1 fs2 fc0 sc0 ls5 ws4">
              diejenigen <span class="_ _1d"> </span>mit <span class="_ _1d"> </span>dem <span class="_ _1d"> </span>iGZ <span class="_ _1d"> </span>abgesc<span class="_ _1"></span>hlossenen
            </div><div class="t m0 x6 h5 y53 ff1 fs2 fc0 sc0 ls5 ws4">
              Tarifverträge <span class="_ _14"> </span>Anw<span class="_ _11"></span>en<span class="_ _1"></span>dung, <span class="_ _26"> </span>an <span class="_ _26"> </span>denen <span class="_ _14"> </span>ver.di <span class="_ _26"> </span>als
            </div><div class="t m0 x6 h5 y54 ff1 fs2 fc0 sc0 ls5 ws4">
              Vertragspartei <span class="_"> </span>be<span class="_ _1"></span>teiligt <span class="_"> </span>ist. <span class="_ _19"> </span>Ab <span class="_ _19"> </span>Beginn <span class="_ _19"> </span>des <span class="_"> </span>e<span class="_ _1"></span>rsten<span class="_ _0"></span>
            </div><div class="t m0 x6 h5 y55 ff1 fs2 fc0 sc0 ls5 ws4">
              Einsatzes <span class="_ _27"> </span>gelten <span class="_ _27"> </span>diejenigen <span class="_ _27"> </span>nach <span class="_ _27"> </span>M<span class="_ _11"></span>aßg<span class="_ _1"></span>abe <span class="_ _27"> </span>des<span class="_ _11"></span>
            </div><div class="t m0 x6 h5 y56 ff1 fs2 fc0 sc0 ls5 ws4">
              Absatzes <span class="_ _1"></span>3 e<span class="_ _1"></span>rmittelten Tarifverträge solange, <span class="_ _1"></span>bis <span class="_ _1"></span>ein
            </div><div class="t m0 x6 h5 y57 ff1 fs2 fc0 sc0 ls5 ws4">
              anderer <span class="_ _28"> </span>Einsatz <span class="_ _28"> </span>beginnt.<span class="_ _0"></span>
            </div><div class="t m0 x6 h5 y58 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y59 ff1 fs2 fc0 sc0 ls5 ws4">
              (5) <span class="_ _15"> </span>Soweit <span class="_ _4"> </span>der <span class="_ _15"> </span>Mitarbeiter <span class="_ _4"> </span>an <span class="_ _15"> </span>einen <span class="_ _15"> </span>Kundenbetrieb
            </div><div class="t m0 x6 h5 y5a ff1 fs2 fc0 sc0 ls5 ws4">
              überlassen w<span class="_ _0"></span>ird, für d<span class="_ _0"></span>en sich <span class="_ _11"></span>keine satzungsgemäße
            </div><div class="t m0 x6 h5 y5b ff1 fs2 fc0 sc0 ls5 ws4">
              Zuständigkeit <span class="_ _26"> </span>fü<span class="_ _1"></span>r <span class="_ _26"> </span>den <span class="_ _14"> </span>jeweiligen <span class="_ _14"> </span>Kundenbetrieb<span class="_ _11"></span>
            </div><div class="t m0 x6 h5 y5c ff1 fs2 fc0 sc0 ls5 ws4">
              ergibt, <span class="_ _1a"> </span>finden <span class="_ _1a"> </span>diejenigen <span class="_ _1a"> </span>mit <span class="_ _29"> </span>dem <span class="_ _1a"> </span>iGZ
            </div><div class="t m0 x6 h5 y5d ff1 fs2 fc0 sc0 ls5 ws4">
              abgeschlossenen <span class="_ _d"> </span>Tarifverträge <span class="_ _d"> </span>Anwendung, <span class="_ _d"> </span>an
            </div><div class="t m0 x6 h5 y5e ff1 fs2 fc0 sc0 ls5 ws4">
              denen ver.di als Vertragspartei beteiligt ist.
            </div><div class="t m0 x6 h5 y5f ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y60 ff2 fs2 fc0 sc0 ls5 ws4">
              <b>2 Beginn / Probezeit / Dauer </b><span class="ff1"> </span>
            </div><div class="t m0 x6 h5 y61 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y62 ff1 fs2 fc0 sc0 ls5 ws4">
              (1) Das Arbeitsverhältnis beginnt am <span class="ff2"><b>{{ Sozlesme.baslama_tarihi || '' }}</b></span>
            </div><div class="t m0 x6 h5 y63 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y64 ff1 fs2 fc0 sc0 ls5 ws4">
              Es <span class="_ _f"></span>ist <span class="_ _f"></span>eine <span class="_ _f"></span>Pro<span class="_ _1"></span>bezeit <span class="_ _f"></span>von <span class="_ _f"></span>6 <span class="_ _f"></span>M<span class="_ _11"></span>on<span class="_ _1"></span>aten <span class="_ _f"></span>gemäß <span class="_ _f"></span>§ <span class="_ _f"></span>2.2<span class="_ _1"></span>.
            </div><div class="t m0 x6 h5 y65 ff1 fs2 fc0 sc0 ls5 ws4">
              Manteltarifvertrag <span class="_ _26"> </span>iGZ <span class="_ _26"> </span>mi<span class="_ _1"></span>t <span class="_ _26"> </span>den <span class="_ _26"> </span>dort <span class="_ _14"> </span>genannten<span class="_ _0"></span>
            </div><div class="t m0 x6 h5 y66 ff1 fs2 fc0 sc0 ls5 ws4">
              Kündigungsfristen <span class="_ _24"> </span>vereinbart. <span class="_ _24"> </span>Probezeiten <span class="_ _1f"> </span>und
            </div><div class="t m0 x6 h5 y67 ff1 fs2 fc0 sc0 ls5 ws4">
              Kündigungsfristen <span class="_ _19"> </span>gelten <span class="_"> </span>gleichermaßen <span class="_ _19"> </span>bei <span class="_ _19"> </span>einer
            </div><div class="t m0 x6 h5 y68 ff1 fs2 fc0 sc0 ls5 ws4">
              Befristung dieses Arbeitsverhältnisses.
            </div><div class="t m0 x6 h5 y69 ff2 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y6a ff1 fs2 fc0 sc0 ls5 ws4">
              Erscheint <span class="_ _16"></span>der <span class="_ _f"></span>M<span class="_ _11"></span>ita<span class="_ _1"></span>rbeiter <span class="_ _16"></span>am <span class="_ _16"></span>ersten <span class="_ _f"></span>Arbeitstag <span class="_ _1"></span>nicht
            </div><div class="t m0 x6 h5 y6b ff1 fs2 fc0 sc0 ls5 ws4">
              und <span class="_ _13"> </span>benachrichtigt <span class="_ _13"> </span>de<span class="_ _1"></span>n <span class="_ _13"> </span>Arbeitgeber <span class="_ _13"> </span>nicht
            </div><div class="t m0 x6 h5 y6c ff1 fs2 fc0 sc0 ls5 ws4">
              unverzüglich <span class="_ _2a"> </span>über <span class="_ _2a"> </span>die <span class="_ _2a"> </span>Verhinderung <span class="_ _2a"> </span>am <span class="_ _2a"> </span>ersten
            </div><div class="t m0 x6 h5 y6d ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitstag, <span class="_ _a"> </span>so <span class="_ _a"> </span>gilt <span class="_ _a"> </span>das <span class="_ _a"> </span>Arbeitsverhältnis <span class="_ _a"> </span>als <span class="_ _a"> </span>nicht
            </div><div class="t m0 x6 h5 y6e ff1 fs2 fc0 sc0 ls5 ws4">
              zustande gekom-men (§ 2.<span class="_ _0"></span>1. M<span class="_ _11"></span>ante<span class="_ _1"></span>ltarifvertrag iGZ).
            </div><div class="t m0 x6 h5 y6f ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y70 ff1 fs2 fc0 sc0 ls5 ws4">
              (2) Die Vertragsparteien vereinbaren, dass
            </div><div class="t m0 x6 h5 y71 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y72 ff4 fs2 fc0 sc0 ls3">
              <div class="checkboxdiv checked">&#x2714;</div>
              <span class="ff1 ls4 ws4">  <span class="ls5">  das Arbeitsverhältnis unbefristet abgeschlos-     </span></span>
            </div><div class="t m0 x6 h5 y73 ff1 fs2 fc0 sc0 ls5 ws4">
              sen wird.
            </div><div class="t m0 x6 h5 y74 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y75 ff4 fs2 fc0 sc0 ls0">
              <div class="checkboxdiv"></div>
              <span class="ff1 ls5 ws4"> <span class="_ _2b"> </span>das <span class="_ _2c"> </span>Arbeitsverhältnis <span class="_ _a"> </span>gemäß <span class="_ _a"> </span>§ <span class="_ _2c"> </span>14 <span class="_ _2c"> </span>Absatz <span class="_ _a"> </span>2 </span>
            </div> <div class="t m0 x7 h5 y76 ff1 fs2 fc0 sc0 ls5 ws4"><span class="bg-gray"></span>
              Teilzeit- <span class="_ _2d"> </span>und <span class="_ _1d"> </span>Befristungsgesetz <span class="_ _2d"> </span>befristet
            </div><div class="t m0 x7 h5 y77 ff1 fs2 fc0 sc0 ls5 ws4">
              (reguläre <span class="_ _d"> </span>Befristung) <span class="_ _d"> </span>wird. <span class="_ _d"> </span>Es<span class="_ _1"></span> <span class="_ _d"> </span>endet <span class="_ _d"> </span>am
            </div><div class="t m0 x7 h5 y78 ff1 fs2 fc0 sc0 ls2">
          <span class="bg-gray">____</span><span class="ls5 ws4"><span class="bg-gray">_________.</span> Der <span class="_ _11"></span>Mitarbeiter <span class="_ _11"></span>b<span class="_ _1"></span>estätigt, <span class="_ _0"></span>dass zu<span class="_ _11"></span> </span>
            </div><div class="t m0 x7 h5 y79 ff1 fs2 fc0 sc0 ls5 ws4">
              keinem <span class="_ _12"> </span>Zeitpunkt <span class="_ _1a"> </span>vor <span class="_ _13"> </span>Be<span class="_ _1"></span>ginn <span class="_ _12"> </span>dieses
            </div><div class="t m0 x7 h5 y7a ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsverhältnisses <span class="_ _2e"> </span>bereits <span class="_ _2e"> </span>ein
            </div><div class="t m0 x7 h5 y7b ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsverhältnis <span class="_ _11"></span>zwischen <span class="_ _11"></span>den <span class="_ _11"></span>Vertragsparteien
            </div><div class="t m0 x7 h5 y7c ff1 fs2 fc0 sc0 ls5 ws4">
              bestanden hat.<span class="ff2"> </span>
            </div><div class="t m0 x6 h5 y7d ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y7e ff4 fs2 fc0 sc0 ls0">
              <div class="checkboxdiv"></div>
              <span class="ff1 ls5 ws4"> <span class="_ _2b"> </span>das <span class="_"> </span>Arbeitsverhältnis <span class="_"> </span>gemäß<span class="_ _0"></span> <span class="_"> </span>§ <span class="_"> </span>14 <span class="_"> </span>Ab<span class="_ _0"></span>satz <span class="_"> </span>2a </span>
            </div><div class="t m0 x7 h5 y7f ff1 fs2 fc0 sc0 ls5 ws4">
              Teilzeit- <span class="_ _f"></span>und <span class="_ _f"></span>Befristungsgeset<span class="_ _0"></span>z <span class="_ _16"></span>be<span class="_ _1"></span>fristet <span class="_ _f"></span>(bis <span class="_ _16"></span>zu
            </div><div class="t m0 x7 h5 y80 ff1 fs2 fc0 sc0 ls5 ws4">
              4 <span class="_ _2f"> </span>Jahre <span class="_ _2f"> </span>nach <span class="_ _2f"> </span>Neugr<span class="_ _11"></span>ü<span class="_ _1"></span>ndung <span class="_ _2f"> </span>eines
            </div><div class="t m0 x7 h5 y81 ff1 fs2 fc0 sc0 ls5 ws4">
              Unternehmens) <span class="_ _30"> </span>wird. <span class="_ _30"> </span>Es <span class="_ _30"> </span>endet <span class="_ _30"> </span>a<span class="_ _11"></span>m
            </div><div class="t m0 x7 h5 y82 ff1 fs2 fc0 sc0 ls2 ws3">
          <span class="bg-gray">________</span><span class="ls5 ws4"><span class="bg-gray">_______.</span> <span class="_ _27"> </span>Der <span class="_ _27"> </span>Mitarbeiter <span class="_ _27"> </span>bestätigt, </span>
            </div><div class="t m0 x7 h5 y83 ff1 fs2 fc0 sc0 ls5 ws4">
              dass <span class="_"> </span>zu <span class="_"> </span>keinem <span class="_"> </span>Zeitpunkt <span class="_"> </span>vor <span class="_"> </span>Beginn <span class="_"> </span>dieses
            </div><div class="t m0 x7 h5 y84 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsverhältnisses <span class="_ _2e"> </span>bereits <span class="_ _2e"> </span>ein
            </div><div class="t m0 x7 h5 y85 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsverhältnis <span class="_ _11"></span>zwischen <span class="_ _11"></span>den <span class="_ _11"></span>Vertragsparteien
            </div><div class="t m0 x7 h5 y86 ff1 fs2 fc0 sc0 ls5 ws4">
              bestanden hat.
            </div><div class="t m0 x6 h5 y87 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y88 ff4 fs2 fc0 sc0 ls0">
              <div class="checkboxdiv"></div>
              <span class="ff1 ls5 ws4"> <span class="_ _2b"> </span>das <span class="_ _2c"> </span>Arbeitsverhältnis <span class="_ _a"> </span>gemäß <span class="_ _a"> </span>§ <span class="_ _2c"> </span>14 <span class="_ _2c"> </span>Absatz <span class="_ _a"> </span>3 </span>
            </div><div class="t m0 x7 h5 y89 ff1 fs2 fc0 sc0 ls5 ws4">
              Teilzeit- <span class="_ _2d"> </span>und <span class="_ _1d"> </span>Befristungsgesetz <span class="_ _2d"> </span>befristet
            </div>
          </div>
        </div><div
          class="pi"
          data-data="{&quot;ctm&quot;:[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}"
        ></div>
      </div>
      <div
        id="pf2"
        class="pf w0 h0"
        data-page-no="2"
      >
        <div class="pc pc2 w0 h0">
          <div class="c x0 y1 w2 h0">
            <div class="t m0 x1 h2 y2 ff1 fs0 fc0 sc0 ls5 ws4">
              © iGZ
            </div><div class="t m0 x1 h2 y3 ff1 fs0 fc0 sc0 ls5 ws4">
              e.V., nach En<span class="_ _0"></span>tfernung von Log<span class="_ _0"></span>o / Copyrigh<span class="_ _11"></span>t<span class="_ _1"></span> frei zur eigenen <span class="_ _11"></span>Verwendung der iGZ-Mitglieder (S<span class="_ _0"></span>tand: <span class="ls6 ws0">17</span>.02.2020)
            </div>
          </div><div class="c x2 y4 w3 h3">
            <div class="t m0 x3 h2 y5 ff1 fs0 fc0 sc0 ls5 ws4">
              2
            </div>
          </div><div class="c x0 y1 w2 h0">
            <div class="t m0 x8 h5 y45 ff1 fs2 fc0 sc0 ls5 ws4">
              (Befristung <span class="_ _a"> </span>älterer <span class="_ _2c"> </span>Mitarbeiter <span class="_ _a"> </span>(ab <span class="_ _2c"> </span>52 <span class="_ _a"> </span>Jahre),
            </div><div class="t m0 x8 h5 y46 ff1 fs2 fc0 sc0 ls5 ws4">
              wenn <span class="_ _11"></span>vor Arbeitsbeginn mindestens <span class="_ _11"></span>vier Monate
            </div><div class="t m0 x8 h5 y47 ff1 fs2 fc0 sc0 ls5 ws4">
              beschäftigungslos) <span class="_ _31"> </span>wird. <span class="_ _31"> </span>Es <span class="_ _31"> </span>endet <span class="_ _31"> </span>am
            </div><div class="t m0 x8 h5 y48 ff1 fs2 fc0 sc0 ls2 ws3">
          <span class="bg-gray">____</span><span class="ls5 ws4"><span class="bg-gray">___________.</span> </span>
            </div><div class="t m0 x5 h5 y49 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y8a ff4 fs2 fc0 sc0 ls0">
              <div class="checkboxdiv"></div>
              <span class="ff1 ls5 ws4"> <span class="_ _2b"> </span>das Arbeitsverhältnis <span class="_ _11"></span>gem<span class="_ _1"></span>äß §<span class="_ _11"></span> 14 Absatz 1 Sa<span class="_ _11"></span>tz </span>
            </div><div class="t m0 x8 h5 y8b ff1 fs2 fc0 sc0 ls5 ws4">
          2 <span class="_ _f"></span>Nr. <span class="_ _16"></span><span class="ls2"><span class="bg-gray"> __ </span></span> <span class="_ _f"></span>Teilzeit- <span class="_ _f"></span>und <span class="_ _16"></span>Befristungsgesetz <span class="_ _f"></span>für <span class="_ _16"></span>die
            </div><div class="t m0 x8 h5 y8c ff1 fs2 fc0 sc0 ls8 ws4">
          Dauer <span class="_ _27"> </span><span class="bg-gray">__</span><span class="_ _11"></span><span class="bg-gray">________________</span><span class="_ _11"></span><span class="bg-gray">______________</span>
            </div><div class="t m0 x8 h5 y8d ff1 fs2 fc0 sc0 ls5 ws4">
              [z.B. <span class="_ _d"> </span>Nr. <span class="_ _1c"> </span>3: <span class="_ _d"> </span>Vertre<span class="_ _1"></span>tung <span class="_ _d"> </span>eines <span class="_ _1c"> </span>erkrankten
            </div><div class="t m0 x8 h5 y8e ff1 fs2 fc0 sc0 ls5 ws4">
              Zeitarbeitnehmers <span class="_ _2c"> </span>d<span class="_ _1"></span>es <span class="_ _32"> </span>Arbeitgebers] <span class="_ _2c"> </span>be<span class="_ _1"></span>fristet<span class="_ _0"></span>
            </div><div class="t m0 x8 h5 y8f ff1 fs2 fc0 sc0 ls5 ws4">
              (Befristung <span class="_ _1d"> </span>mit <span class="_ _1d"> </span>Sachgrund) <span class="_ _1d"> </span>wird. <span class="_ _1d"> </span>Das
            </div><div class="t m0 x8 h5 y90 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsverhältnis <span class="_ _14"> </span>endet <span class="_ _26"> </span>mit <span class="_ _14"> </span>Erreichung <span class="_ _26"> </span>des
            </div><div class="t m0 x8 h5 y91 ff1 fs2 fc0 sc0 ls5 ws4">
              Zwecks, <span class="_ _1c"> </span>frühestens <span class="_ _1c"> </span>aber <span class="_ _d"> </span>14 <span class="_ _1c"> </span>Tage <span class="_ _1c"> </span>nach
            </div><div class="t m0 x8 h5 y92 ff1 fs2 fc0 sc0 ls5 ws4">
              Mitteilung <span class="_ _14"> </span>der <span class="_ _23"> </span>Zweckerreichung <span class="_ _23"> </span>durch <span class="_ _14"> </span>den
            </div><div class="t m0 x8 h5 y93 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitgeber, <span class="_ _32"> </span>ohne <span class="_ _2c"> </span>dass <span class="_ _32"> </span>es <span class="_ _2c"> </span>e<span class="_ _1"></span>iner <span class="_ _32"> </span>Kündigung
            </div><div class="t m0 x8 h5 y94 ff1 fs2 fc0 sc0 ls5 ws4">
              bedarf.
            </div><div class="t m0 x1 h5 y95 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y96 ff4 fs2 fc0 sc0 ls0">
              <div class="checkboxdiv"></div>
              <span class="ff1 ls5 ws4"> <span class="_ _2b"> </span>das <span class="_ _31"> </span>Arbeitsverhältnis <span class="_ _33"> </span>auf <span class="_ _33"> </span>W<span class="_ _1"></span>unsch <span class="_ _33"> </span>des </span>
            </div><div class="t m0 x8 h5 y97 ff1 fs2 fc0 sc0 ls5 ws4">
              Mitarbeiters <span class="_ _f"></span>[z.B. <span class="_ _16"></span>Studium] <span class="_ _f"></span>nach <span class="_ _16"></span>§ <span class="_ _f"></span>14 <span class="_ _f"></span>Absatz <span class="_ _16"></span>1
            </div><div class="t m0 x8 h5 y98 ff1 fs2 fc0 sc0 ls5 ws4">
              Satz <span class="_ _19"> </span>2 <span class="_ _a"> </span>Nr. <span class="_ _a"> </span>6 <span class="_ _a"> </span>Teilzeit- <span class="_ _a"> </span>und <span class="_ _19"> </span>Befri<span class="_ _1"></span>stungsgesetz
            </div><div class="t m0 x8 h5 y99 ff1 fs2 fc0 sc0 ls5 ws4">
          befristet <span class="_ _a"> </span>wird. <span class="_ _a"> </span>Es <span class="_ _a"> </span>endet <span class="_ _a"> </span>am <span class="_ _a"> </span><span class="bg-gray">_________.</span> <span class="_ _a"> </span>Die
            </div><div class="t m0 x8 h5 y9a ff1 fs2 fc0 sc0 ls5 ws4">
              Gründe <span class="_ _f"></span>für <span class="_ _16"></span>d<span class="_ _1"></span>ie <span class="_ _f"></span>gew<span class="_ _11"></span>ün<span class="_ _1"></span>schte <span class="_ _f"></span>Befristung <span class="_ _f"></span>sind <span class="_ _16"></span>der
            </div><div class="t m0 x8 h5 y9b ff1 fs2 fc0 sc0 ls5 ws4">
              beigefügten <span class="_ _23"> </span>Erklärung <span class="_ _23"> </span>de<span class="_ _1"></span>s <span class="_ _23"> </span>Mitarbeiters <span class="_ _23"> </span>zu
            </div><div class="t m0 x8 h5 y9c ff1 fs2 fc0 sc0 ls5 ws4">
              entnehmen.
            </div><div class="t m0 x1 h5 y9d ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y9e ff2 fs2 fc0 sc0 ls5 ws4">
              <b>3 Tätigkeit / Pflichten des Mitarbeiters</b><span class="ff1"> </span>
            </div><div class="t m0 x1 h5 y9f ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 ya0 ff1 fs2 fc0 sc0 ls5 ws4">
              (1) <span class="_ _11"></span>Der <span class="_ _11"></span>Mitarbeiter <span class="_ _11"></span>wird <span class="_ _11"></span>ent<span class="_ _0"></span>sprechend <span class="_ _11"></span>der <span class="_ _11"></span>Tätigkeit <span class="_ _11"></span>im
            </div><div class="t m0 x1 h5 ya1 ff1 fs2 fc0 sc0 ls5 ws4">
              Kundenbetrieb eingestellt als {{ Sozlesme.meslek || '' }}
            </div><div class="t m0 x1 h5 ya2 ff1 fs2 fc0 sc0 ls5 ws4">
              Dem Mitarbeiter<span class="fs0 ls9"> </span><span class="ws1">obliegen</span><span class="fs0 ls9"> </span><span class="ws1">z.B.</span><span class="fs0 lsa"> </span><span class="ws1">folgenden</span><span class="fs0 ls9"> </span><span class="ws1">Tätigkeiten:</span><span class="ff2"> </span>
            </div><div class="t m0 x1 h5 ya3 ff2 fs2 fc0 sc0 ls5 ws4">
              <b> Das <span class="_ _31"> </span>Vorbereiten <span class="_ _33"> </span>und <span class="_ _31"> </span>Sch<span class="_ _11"></span>w<span class="_ _1"></span>eißen <span class="_ _31"> </span> <span class="_ _33"> </span>von
              </b>
            </div><div class="t m0 x1 h5 ya4 ff2 fs2 fc0 sc0 ls5 ws4">
              <b> Schweißarbeiten <span class="_ _1b"> </span>an, <span class="_ _1b"> </span>Kessel <span class="_ _1b"> </span>und <span class="_ _1b"> </span>Behältern<span class="lse">. </span>
              </b></div><div class="t m0 x1 h5 ya5 ff2 fs2 fc0 sc0 ls5 ws4">
              <b> Montage und Demontage <span class="_ _11"></span>von Kesseln, Behältern
              </b></div><div class="t m0 x1 h5 ya6 ff2 fs2 fc0 sc0 ls5 ws4">
              <b> Industrieanlagen, Schlossertätigkeiten.</b> <span class="ff1"> </span>
            </div><div class="t m0 x1 h5 ya7 ff1 fs2 fc0 sc0 ls5 ws4">
              Aus der <span class="_ _11"></span>Einsatzan<span class="_ _1"></span>weisung <span class="_ _11"></span>vor Beginn de<span class="_ _0"></span>s Einsatzes
            </div><div class="t m0 x1 h5 ya8 ff1 fs2 fc0 sc0 ls5 ws4">
              in <span class="_ _15"> </span>einem <span class="_ _15"> </span>Kundenbetrieb <span class="_ _15"> </span>können <span class="_ _15"> </span>sich <span class="_ _15"> </span>abweichende
            </div><div class="t m0 x1 h5 ya9 ff1 fs2 fc0 sc0 ls5 ws4">
              oder ergänzende Tätigkeiten ergeben.
            </div><div class="t m0 x1 h5 yaa ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 yab ff1 fs2 fc0 sc0 ls5 ws4">
              (2) <span class="_ _34"> </span>Der <span class="_ _34"> </span>Mitarbeiter <span class="_ _34"> </span>wird <span class="_ _34"> </span>an <span class="_ _34"> </span>verschiedenen
            </div><div class="t m0 x1 h5 yac ff1 fs2 fc0 sc0 ls5 ws4">
              Einsatzorten <span class="_ _35"> </span>im <span class="_ _35"> </span>Gebiet
            </div><div class="t m0 x1 h5 yad ff1 fs2 fc0 sc0 ls8 ws4">
          <span class="bg-gray">____________</span><span class="_ _11"></span><span class="bg-gray">_______________</span> <span class="_ _36"> </span>bei
            </div><div class="t m0 x1 h5 yae ff1 fs2 fc0 sc0 ls5 ws4">
              Kundenbetrieben <span class="_ _16"></span>beschäftigt. <span class="_ _1"></span>Er <span class="_ _16"></span>ist <span class="_ _16"></span>bei <span class="_ _16"></span>Bedarf <span class="_ _16"></span>auch
            </div><div class="t m0 x1 h5 yaf ff1 fs2 fc0 sc0 ls5 ws4">
              zur <span class="_ _4"> </span>Arbei<span class="_ _1"></span>tsleistung <span class="_ _4"> </span>an <span class="_ _4"> </span>Einsatzorten <span class="_ _4"> </span>außerhalb <span class="_ _20"> </span>des
            </div><div class="t m0 x1 h5 yb0 ff1 fs2 fc0 sc0 ls5 ws4">
              Kundenbetriebes <span class="_ _32"> </span>verpflichtet. <span class="_ _32"> </span>Der <span class="_ _32"> </span>Arb<span class="_ _1"></span>eitgeber <span class="_ _32"> </span>ist
            </div><div class="t m0 x1 h5 yb1 ff1 fs2 fc0 sc0 ls5 ws4">
              berechtigt, <span class="_ _12"> </span>den <span class="_ _12"> </span>Mitarbeiter <span class="_ _12"> </span>j<span class="_ _1"></span>ederzeit <span class="_ _12"> </span>vom
            </div><div class="t m0 x1 h5 yb2 ff1 fs2 fc0 sc0 ls5 ws4">
              Kundeneinsatz <span class="_ _31"> </span>abzuberufen <span class="_ _31"> </span>und <span class="_ _31"> </span>anderw<span class="_ _11"></span>e<span class="_ _1"></span>itig
            </div><div class="t m0 x1 h5 yb3 ff1 fs2 fc0 sc0 ls5 ws4">
              einzusetzen.
            </div><div class="t m0 x1 h5 yb4 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 yb5 ff1 fs2 fc0 sc0 lsb">
              (<span class="ls2 ws3">3)</span><span class="fc2 lsc ws4"> </span><span class="ls5 ws4">Dem Mitarbeiter k<span class="_ _1"></span>önnen auch interne <span class="_ _1"></span>Tätigkeiten </span>
            </div><div class="t m0 x1 h5 yb6 ff1 fs2 fc0 sc0 ls5 ws4">
              im <span class="_ _2c"> </span>Betrieb <span class="_ _19"> </span>d<span class="_ _1"></span>es <span class="_ _a"> </span>Arbeitgebers <span class="_ _a"> </span>zugewiesen <span class="_ _2c"> </span>werden
            </div><div class="t m0 x1 h5 yb7 ff1 fs2 fc0 sc0 ls5 ws4">
              (kein <span class="_"> </span>Drittpersonaleinsatz). <span class="_"> </span>Eine <span class="_"> </span>Verringerung <span class="_"> </span>des<span class="_ _0"></span>
            </div><div class="t m0 x1 h5 yb8 ff1 fs2 fc0 sc0 ls5 ws4">
              Vergütungsanspruchs <span class="_ _2c"> </span>tritt <span class="_ _2c"> </span>dadurch <span class="_ _a"> </span>n<span class="_ _1"></span>icht <span class="_ _2c"> </span>ein. <span class="_ _2c"> </span>Die
            </div><div class="t m0 x1 h5 yb9 ff1 fs2 fc0 sc0 ls5 ws4">
              Zuweisung <span class="_ _2a"> </span>von <span class="_ _2a"> </span>internen <span class="_ _2a"> </span>Tätigkeiten <span class="_ _2a"> </span>darf <span class="_ _2a"> </span>einen
            </div><div class="t m0 x1 h5 yba ff1 fs2 fc0 sc0 ls5 ws4">
              ununterbrochenen <span class="_ _10"> </span>Zeitraum <span class="_ _15"> </span>von <span class="_ _10"> </span>vier <span class="_ _10"> </span>W<span class="_ _1"></span>ochen <span class="_ _10"> </span>nicht
            </div><div class="t m0 x1 h5 ybb ff1 fs2 fc0 sc0 ls5 ws4">
              überschreiten.
            </div><div class="t m0 x1 h5 ybc ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 ybd ff1 fs2 fc0 sc0 ls5 ws4">
              (4) <span class="_ _d"> </span>Der <span class="_ _1c"> </span>Mitarbeiter <span class="_ _1c"> </span>hat <span class="_ _d"> </span>sich <span class="_ _d"> </span>d<span class="_ _1"></span>ie <span class="_ _d"> </span>geleisteten
            </div><div class="t m0 x1 h5 ybe ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsstunden <span class="_ _16"></span>pro <span class="_ _f"></span>Kunde<span class="_ _0"></span> <span class="_ _16"></span>und <span class="_ _f"></span>Kalenderw<span class="_ _11"></span>oc<span class="_ _1"></span>he <span class="_ _16"></span>vom
            </div><div class="t m0 x1 h5 ybf ff1 fs2 fc0 sc0 ls5 ws4">
              Kunden <span class="_ _4"> </span>bestätigen <span class="_ _15"> </span>zu <span class="_ _15"> </span>l<span class="_ _1"></span>assen. <span class="_ _15"> </span>Der <span class="_ _4"> </span>Nachweis <span class="_ _15"> </span>k<span class="_ _1"></span>ann
            </div><div class="t m0 x1 h5 yc0 ff1 fs2 fc0 sc0 ls5 ws4">
              über <span class="_"> </span>eine <span class="_"> </span>elektronische <span class="_"> </span>Arbeitszeiterfassung <span class="_"> </span>beim<span class="_ _11"></span>
            </div><div class="t m0 x1 h5 yc1 ff1 fs2 fc0 sc0 ls5 ws4">
              Kunden <span class="_ _1e"> </span>oder <span class="_ _1e"> </span>ü<span class="_ _1"></span>ber <span class="_ _1e"> </span>die <span class="_ _1e"> </span>vom <span class="_ _1e"> </span>Arbeitgeber
            </div><div class="t m0 x1 h5 yc2 ff1 fs2 fc0 sc0 ls5 ws4">
              ausgehändigten <span class="_"> </span>Tätigkeitsnachweise <span class="_ _19"> </span>erfolgen. <span class="_"> </span>Die
            </div><div class="t m0 x1 h5 yc3 ff1 fs2 fc0 sc0 ls5 ws4">
              unterschriebenen <span class="_ _e"> </span>Tätigkeitsnachweise <span class="_ _d"> </span>oder <span class="_ _e"> </span>der
            </div><div class="t m0 x1 h5 yc4 ff1 fs2 fc0 sc0 ls5 ws4">
              Auszug <span class="_ _19"> </span>der <span class="_ _19"> </span>elektronisch <span class="_"> </span>erfassten <span class="_ _19"> </span>Arbeitsstunden
            </div><div class="t m0 x1 h5 yc5 ff1 fs2 fc0 sc0 ls5 ws4">
              sind <span class="_ _1d"> </span>umgehend, <span class="_ _1d"> </span>jeweils <span class="_ _1d"> </span>wöchentlich <span class="_ _1d"> </span>beim
            </div><div class="t m0 x1 h5 yc6 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitgeber einzureichen.
            </div><div class="t m0 x1 h5 yc7 ff1 fs2 fc0 sc0 ls4 ws4">
              <span class="ff2 ls5"> </span>
            </div><div class="t m0 x1 h5 yc8 ff2 fs2 fc0 sc0 ls5 ws4">
          <b>4 Arbeitszeit / Mehrarbeit / Arbeitszeitkonto</b>
            </div><div class="t m0 x6 h5 yc9 ff2 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y46 ff1 fs2 fc0 sc0 ls5 ws4">
              (1) <span class="_ _4"> </span>Es<span class="_ _1"></span> <span class="_ _4"> </span>wird <span class="_ _20"> </span>auf <span class="_ _4"> </span>die <span class="_"> </span>Reg<span class="_ _11"></span>e<span class="_ _1"></span>lungen <span class="_ _4"> </span>zur <span class="_ _20"> </span>Arbeitszeit <span class="_ _4"> </span>in
            </div><div class="t m0 x6 h5 y47 ff1 fs2 fc0 sc0 ls5 ws4">
              § 3.1. Manteltarifvertrag iGZ verw<span class="_ _0"></span>iesen.<span class="_ _1"></span>
            </div><div class="t m0 x6 h5 y48 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y49 ff4 fs2 fc0 sc0 ls0">
              <div class="checkboxdiv"></div>
              <span class="ff1 ls5 ws4"> <span class="_ _2b"> </span>Der <span class="_ _24"> </span>Mitarbeiter <span class="_ _24"> </span>arbeitet <span class="_ _24"> </span>in <span class="_ _1f"> </span>Vollzeit. <span class="_ _24"> </span>Die </span>
            </div><div class="t m0 x7 h5 y4a ff1 fs2 fc0 sc0 ls5 ws4">
              Vertragsparteien <span class="_"> </span>vereinbaren <span class="_ _19"> </span>eine <span class="_"> </span>individuelle
            </div><div class="t m0 x7 h5 y4b ff1 fs2 fc0 sc0 ls5 ws4">
              regelmäßige <span class="_ _a"> </span>monatliche <span class="_ _a"> </span>Arbeitszeit <span class="_ _a"> </span>gemäß <span class="_ _a"> </span>§
            </div><div class="t m0 x7 h5 y4c ff1 fs2 fc0 sc0 ls5 ws4">
              3.1.1. <span class="_ _24"> </span>Manteltarifvertrag <span class="_ _1f"> </span>iGZ, <span class="_ _24"> </span>die <span class="_ _1f"> </span>151,67
            </div><div class="t m0 x7 h5 y4d ff1 fs2 fc0 sc0 ls5 ws4">
              Stunden beträgt.
            </div><div class="t m0 x7 h5 y4e ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y4f ff4 fs2 fc0 sc0 ls5 ws5">
              <div class="checkboxdiv checked">&#x2714;</div>
              <span class="ff1 ws4"><span class="_ _1f"> </span>Der Mitarbeiter <span class="_ _24"> </span>a<span class="_ _1"></span>rbeitet <span class="_ _24"> </span>in <span class="_ _1f"> </span>Vollzeit. <span class="_ _1f"> </span>Die </span>
            </div><div class="t m0 x6 h5 y50 ff1 fs2 fc0 sc0 ls5 ws4">
              Vertragsparteien <span class="_ _34"> </span>vereinbaren <span class="_ _34"> </span>eine <span class="_ _34"> </span>individuell<span class="_ _0"></span>e
            </div><div class="t m0 x6 h5 y51 ff1 fs2 fc0 sc0 ls5 ws4">
              regelmäßige <span class="_ _f"></span>Arbeitszeit <span class="_ _16"></span>p<span class="_ _1"></span>ro <span class="_ _16"></span>Monat <span class="_ _f"></span> <span class="_ _f"></span>gemäß <span class="_ _16"></span>§ <span class="_ _f"></span>3.1.2.<span class="_ _0"></span>
            </div><div class="t m0 x6 h5 y52 ff1 fs2 fc0 sc0 ls5 ws4">
              Manteltarifvertrag <span class="_ _1"></span>iGZ, <span class="_ _16"></span>die <span class="_ _1"></span>sich <span class="_ _16"></span>nach <span class="_ _1"></span>de<span class="_ _1"></span>r <span class="_ _1"></span>Anzahl <span class="_ _1"></span>der
            </div><div class="t m0 x6 h5 y53 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitstage richtet.
            </div><div class="t m0 x6 h5 y54 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y55 ff4 fs2 fc0 sc0 ls0">
              <div class="checkboxdiv"></div>
              <span class="ff1 ls5 ws4"> <span class="_ _2b"> </span>Der <span class="_ _1f"> </span>Mitarbeiter <span class="_ _24"> </span>arbeitet <span class="_ _1f"> </span>in <span class="_ _24"> </span>Teilzeit. <span class="_ _1f"> </span>Die </span>
            </div><div class="t m0 x7 h5 y56 ff1 fs2 fc0 sc0 ls5 ws4">
              Vertragsparteien <span class="_"> </span>vereinbaren <span class="_ _19"> </span>eine <span class="_"> </span>individuelle
            </div><div class="t m0 x7 h5 y57 ff1 fs2 fc0 sc0 ls5 ws4">
              regelmäßige <span class="_ _a"> </span>monatliche <span class="_ _a"> </span>Arbeitszeit <span class="_ _a"> </span>gemäß <span class="_ _a"> </span>§
            </div><div class="t m0 x7 h5 y58 ff1 fs2 fc0 sc0 ls5 ws4">
          3.1.1. <span class="_ _2b"> </span>Manteltarifvertrag <span class="_ _1c"> </span>iGZ <span class="_ _1c"> </span>von <span class="_ _2b"> </span><span class="bg-gray">___</span><span class="_ _1"></span><span class="bg-gray">____</span>
            </div><div class="t m0 x7 h5 y59 ff1 fs2 fc0 sc0 ls5 ws4">
              Stunden.
            </div><div class="t m0 x7 h5 y5a ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y5b ff4 fs2 fc0 sc0 ls0">
              <div class="checkboxdiv"></div>
              <span class="ff1 ls5 ws4"> <span class="_ _2b"> </span>Der <span class="_ _1f"> </span>Mitarbeiter <span class="_ _24"> </span>arbeitet <span class="_ _1f"> </span>in <span class="_ _24"> </span>Teilzeit. <span class="_ _1f"> </span>Die </span>
            </div><div class="t m0 x7 h5 y5c ff1 fs2 fc0 sc0 ls5 ws4">
              Vertragsparteien <span class="_"> </span>vereinbaren <span class="_ _19"> </span>eine <span class="_"> </span>individuelle
            </div><div class="t m0 x7 h5 y5d ff1 fs2 fc0 sc0 ls5 ws4">
              regelmäßige <span class="_ _20"> </span>Arbeitszeit <span class="_ _4"> </span>pro<span class="_ _1"></span> <span class="_ _4"> </span>Monat <span class="_ _20"> </span> <span class="_ _20"> </span>gemäß <span class="_ _20"> </span>§
            </div><div class="t m0 x7 h5 y5e ff1 fs2 fc0 sc0 ls5 ws4">
              3.1.2. <span class="_ _f"></span>Manteltarifvertrag <span class="_ _f"></span>iGZ, <span class="_ _16"></span>d<span class="_ _1"></span>ie <span class="_ _f"></span>sich <span class="_ _f"></span>nach <span class="_ _f"></span>der
            </div><div class="t m0 x7 h5 y5f ff1 fs2 fc0 sc0 ls5 ws4">
              Anzahl <span class="_ _20"> </span>der <span class="_ _4"> </span>Arbeitstage <span class="_ _4"> </span>richtet. <span class="_ _4"> </span>D<span class="_ _1"></span>ie <span class="_ _4"> </span>Arb<span class="_ _1"></span>eitszeit
            </div><div class="t m0 x7 h5 yca ff1 fs2 fc0 sc0 ls5 ws4">
              beträgt
            </div><div class="t m0 x7 h5 y61 ff1 fs2 fc0 sc0 ls5 ws4">
          in <span class="_ _15"> </span>Monaten <span class="_ _4"> </span>mit <span class="_ _4"> </span>20 <span class="_ _15"> </span>Arbeitstagen <span class="_ _4"> </span><span class="ls2"><span class="bg-gray">___</span></span> <span class="_ _4"> </span>Stunden,
            </div><div class="t m0 x7 h5 ycb ff1 fs2 fc0 sc0 ls5 ws4">
          in <span class="_ _15"> </span>Monaten <span class="_ _4"> </span>mit <span class="_ _4"> </span>21 <span class="_ _15"> </span>Arbeitstagen <span class="_ _4"> </span><span class="ls2"><span class="bg-gray">___</span></span> <span class="_ _4"> </span>Stunden,
            </div><div class="t m0 x7 h5 y63 ff1 fs2 fc0 sc0 ls5 ws4">
          in <span class="_ _15"> </span>Monaten <span class="_ _4"> </span>mit <span class="_ _4"> </span>22 <span class="_ _15"> </span>Arbeitstagen <span class="_ _4"> </span><span class="ls2"><span class="bg-gray">___</span></span> <span class="_ _4"> </span>Stunden,
            </div><div class="t m0 x7 h5 y64 ff1 fs2 fc0 sc0 ls5 ws4">
          in <span class="_ _15"> </span>Monaten <span class="_ _4"> </span>mit <span class="_ _4"> </span>23 <span class="_ _15"> </span>Arbeitstagen <span class="_ _4"> </span><span class="ls2"><span class="bg-gray">___</span></span> <span class="_ _4"> </span>Stunden.
            </div><div class="t m0 x7 h5 y65 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h6 y66 ff4 fs2 fc0 sc0 ls0">
              <div class="checkboxdiv"></div>
              <span class="ff1 lsd ws4"><span class="ff3 ls5"><span class="bg-gray"> Optional <span class="_ _a"> </span>zur <span class="_ _a"> </span>Beschäftigung <span class="_ _a"> </span>auf <span class="_ _a"> </span>450 <span class="_ _a"> </span>€<span class="_ _1"></span><span class="ff1">-Basis: </span></span></span></span>
            </div><div class="t m0 x7 h5 y67 ff1 fs2 fc0 sc0 ls5 ws4">
              Der <span class="_ _1f"> </span>Mitarbeiter <span class="_ _34"> </span>w<span class="_ _11"></span>ird<span class="_ _1"></span> <span class="_ _1f"> </span>im <span class="_ _37"> </span>Rahmen <span class="_ _1f"> </span>ei<span class="_ _1"></span>ner
            </div><div class="t m0 x7 h5 y68 ff1 fs2 fc0 sc0 ls5 ws4">
              geringfügigen <span class="_ _16"></span>Beschäftigung <span class="_ _1"></span>gemä<span class="_ _1"></span>ß <span class="_ _1"></span>§ <span class="_ _16"></span>8 <span class="_ _16"></span>Abs. <span class="_ _16"></span>1
            </div><div class="t m0 x7 h5 ycc ff1 fs2 fc0 sc0 ls5 ws4">
              Nr. <span class="_ _16"></span>1 <span class="_ _16"></span>SGB <span class="_ _16"></span>IV <span class="_ _1"></span>e<span class="_ _1"></span>ingesetzt. <span class="_ _1"></span>Der <span class="_ _1"></span>Arb<span class="_ _1"></span>eitgeber <span class="_ _1"></span>weist
            </div><div class="t m0 x7 h5 y6a ff1 fs2 fc0 sc0 ls5 ws4">
              den <span class="_ _16"></span>Mitarbeiter <span class="_ _16"></span>darauf <span class="_ _16"></span>hin, <span class="_ _16"></span>dass<span class="_ _1"></span> <span class="_ _1"></span>d<span class="_ _1"></span>er <span class="_ _16"></span>Mitarbeiter
            </div><div class="t m0 x7 h5 y6b ff1 fs2 fc0 sc0 ls5 ws4">
              den <span class="_ _23"> </span>p<span class="_ _1"></span>auschalen <span class="_ _23"> </span>Rentenversicherungsbeitrag
            </div><div class="t m0 x7 h5 y6c ff1 fs2 fc0 sc0 ls5 ws4">
              des <span class="_ _27"> </span>Arbeitgebers <span class="_ _32"> </span>(derzeit <span class="_ _32"> </span>15 <span class="_ _27"> </span>%) <span class="_ _32"> </span>mit <span class="_ _32"> </span>ei<span class="_ _1"></span>ne<span class="lsf">m </span>
            </div><div class="t m0 x7 h5 y6d ff1 fs2 fc0 sc0 ls5 ws4">
              eigenen Beitrag <span class="_ _11"></span>von derzeit <span class="_ _11"></span> 3,6 <span class="_ _11"></span>% auf <span class="_ _11"></span>di<span class="_ _1"></span>e <span class="_ _11"></span>vollen
            </div><div class="t m0 x7 h5 y6e ff1 fs2 fc0 sc0 ls5 ws4">
              18,6 <span class="_ _2c"> </span>% <span class="_ _a"> </span>aufstocken <span class="_ _2c"> </span>muss. <span class="_ _a"> </span>Damit <span class="_ _2c"> </span>erwirbt <span class="_ _a"> </span>der
            </div><div class="t m0 x7 h5 y6f ff1 fs2 fc0 sc0 ls5 ws4">
              Mitarbeiter <span class="_ _11"></span>den <span class="_ _11"></span>vollen Sch<span class="_ _11"></span>u<span class="_ _1"></span>tz <span class="_ _11"></span>in <span class="_ _11"></span>der <span class="_ _11"></span>ge<span class="_ _1"></span>setzlichen<span class="_ _0"></span>
            </div><div class="t m0 x7 h5 y70 ff1 fs2 fc0 sc0 ls5 ws4">
              Rentenversicherung. <span class="_ _10"> </span>Der <span class="_ _10"> </span>Mitarbeite<span class="_ _1"></span>r <span class="_ _f"></span>ka<span class="_ _1"></span>nn <span class="_ _f"></span>s<span class="_ _1"></span>ich
            </div><div class="t m0 x7 h5 y71 ff1 fs2 fc0 sc0 ls5 ws4">
              jedoch <span class="_ _33"> </span>durch <span class="_ _38"> </span>schriftlichen <span class="_ _38"> </span>Antra<span class="_ _1"></span>g <span class="_ _38"> </span>beim
            </div><div class="t m0 x7 h5 y72 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitgeber <span class="_ _1"></span>von <span class="_ _1"></span>der <span class="_ _1"></span>Rentenversicherungspflicht
            </div><div class="t m0 x7 h5 y73 ff1 fs2 fc0 sc0 ls5 ws4">
              befreien lassen. In die<span class="_ _11"></span>s<span class="_ _1"></span>em Fall <span class="_ _0"></span>gilt die Befreiung<span class="_ _0"></span>
            </div><div class="t m0 x7 h5 y74 ff1 fs2 fc0 sc0 ls5 ws4">
              von <span class="_ _14"> </span>der <span class="_ _14"> </span>Rentenversicherungspflicht <span class="_ _26"> </span>für <span class="_ _14"> </span>die
            </div><div class="t m0 x7 h5 y75 ff1 fs2 fc0 sc0 ls5 ws4">
              gesamte <span class="_ _39"> </span>Dauer <span class="_ _39"> </span>des
            </div><div class="t m0 x7 h5 y76 ff1 fs2 fc0 sc0 ls5 ws4">
              Beschäftigungsverhältnisses.
            </div><div class="t m0 x6 h5 ycd ff1 fs2 fc0 sc0 ls5 ws4">
              (2) <span class="_ _f"></span>Der <span class="_ _16"></span>Mitarbeiter <span class="_ _f"></span>verpflichtet <span class="_ _16"></span>sich <span class="_ _f"></span>im <span class="_ _f"></span>Rahmen <span class="_ _16"></span>des
            </div><div class="t m0 x6 h5 yce ff1 fs2 fc0 sc0 ls5 ws4">
              gesetzlich <span class="_ _15"> </span>Zulässigen <span class="_ _10"> </span>Übers<span class="_ _1"></span>tunden <span class="_ _10"> </span>und <span class="_ _15"> </span>Mehrarb<span class="_ _1"></span>eit
            </div><div class="t m0 x6 h5 ycf ff1 fs2 fc0 sc0 ls10 ws6">
              zu<span class="ls5 ws4"> leisten<span class="_ _1"></span><span class="fc2">. </span></span>
            </div><div class="t m0 x6 h5 yd0 ff1 fs2 fc0 sc0 ls5 ws4">
              (3) Der Ar<span class="_ _0"></span>beitgeber richtet für<span class="_ _0"></span> den <span class="_ _0"></span>Mitarbeiter gemäß
            </div><div class="t m0 x6 h5 yd1 ff1 fs2 fc0 sc0 ls5 ws4">
              § 3.2. M<span class="_ _11"></span>antel<span class="_ _1"></span>tarifvertrag <span class="_ _11"></span>iGZ ein Arbeitsze<span class="_ _0"></span>itkonto ein. <span class="fc2"> </span>
            </div><div class="t m0 x6 h5 yd2 ff2 fs2 fc0 sc0 ls5 ws4">
              <b>5 Vergütung und Fälligkeit / A<span class="_ _0"></span>ufwendungse<span class="_ _1"></span>rsatz
              </b></div><div class="t m0 x6 h5 yd3 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 yd4 ff1 fs2 fc0 sc0 ls5 ws4">
              (1) <span class="_ _20"> </span>Der <span class="_ _4"> </span>Mitarbeite<span class="_ _1"></span>r <span class="_ _4"> </span>wird <span class="_ _20"> </span>gemäß <span class="_ _20"> </span>§§ <span class="_ _20"> </span>2 <span class="_ _4"> </span>Absatz <span class="_ _20"> </span>1, <span class="_ _4"> </span>3
            </div><div class="t m0 x6 h5 yd5 ff1 fs2 fc0 sc0 ls5 ws4">
              Entgeltrahmentarifvertrag <span class="_ _27"> </span>iGZ <span class="_ _27"> </span>eingruppiert <span class="_ _27"> </span>in <span class="_ _27"> </span>die
            </div><div class="t m0 x6 h5 yd6 ff1 fs2 fc0 sc0 ls5 ws4">
              Entgeltgruppe {{ Sozlesme.ucret_grubu || '' }}.
            </div><div class="t m0 x6 h5 yd7 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 yd8 ff1 fs2 fc0 sc0 ls5 ws4">
          (2) <span class="_ _a"> </span>Der <span class="_ _a"> </span>Mitarbeiter <span class="_ _a"> </span>erhält <span class="_ _a"> </span>ein <span class="_ _2c"> </span><span class="ff2"><b>tarifliches <span class="_ _a"> </span>Entgelt </b></span>
            </div><div class="t m0 x6 h5 yd9 ff1 fs2 fc0 sc0 ls5 ws4">
              (Entgeltgruppe), <span class="_ _14"> </span>dessen <span class="_ _26"> </span>Höhe <span class="_ _14"> </span>sich <span class="_ _14"> </span>nach <span class="_ _26"> </span>§<span class="_ _1"></span> <span class="_ _26"> </span>2
            </div><div class="t m0 x6 h5 yda ff1 fs2 fc0 sc0 ls5 ws4">
              Entgelttarifvertrag <span class="_ _14"> </span>iGZ <span class="_ _14"> </span>in <span class="_ _26"> </span>Verbindung <span class="_ _14"> </span>mit <span class="_ _14"> </span>§ <span class="_ _26"> </span>4
            </div>
          </div>
        </div><div
          class="pi"
          data-data="{&quot;ctm&quot;:[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}"
        ></div>
      </div>
      <div
        id="pf3"
        class="pf w0 h0"
        data-page-no="3"
      >
        <div class="pc pc3 w0 h0">
          <div class="c x0 y1 w2 h0">
            <div class="t m0 x1 h2 y2 ff1 fs0 fc0 sc0 ls5 ws4">
              © iGZ
            </div><div class="t m0 x1 h2 y3 ff1 fs0 fc0 sc0 ls5 ws4">
              e.V., nach En<span class="_ _0"></span>tfernung von Log<span class="_ _0"></span>o / Copyrigh<span class="_ _11"></span>t<span class="_ _1"></span> frei zur eigenen <span class="_ _11"></span>Verwendung der iGZ-Mitglieder (S<span class="_ _0"></span>tand: <span class="ls6 ws0">17</span>.02.2020)
            </div>
          </div><div class="c x2 y4 w3 h3">
            <div class="t m0 x3 h2 y5 ff1 fs0 fc0 sc0 ls5 ws4">
              3
            </div>
          </div><div class="c x0 y1 w2 h0">
            <div class="t m0 x1 h5 y45 ff1 fs2 fc0 sc0 ls5 ws4">
              Entgeltrahmentarifvertrag <span class="_ _19"> </span>iGZ <span class="_"> </span>bemisst. <span class="_ _19"> </span>Es <span class="_ _19"> </span>beträgt
            </div><div class="t m0 x1 h5 y46 ff1 fs2 fc0 sc0 ls5 ws4">
              derzeit
            </div><div class="t m0 x1 h5 y47 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x9 h7 ydb ff2 fs2 fc0 sc0 ls5 ws4">
          <b>{{ Sozlesme.saat_ucreti || '' }}<span class="ff5 ls2">€</span></b><span class="ff1"> brutto pro Stunde  </span>
            </div><div class="t m0 x1 h5 y49 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h6 y4a ff1 fs2 fc0 sc0 ls5 ws4">
              Zzgl. übertarifliche Zulage i.H<span class="ls4">. </span><span class="ws1">{{ Sozlesme.ek_ucret || '' }}<span class="ff3">€</span></span>
            </div><div class="t m0 x1 h5 y4b ff1 fs2 fc0 sc0 ls5 ws4">
              Zusätzlich erhält der Mitarbeiter eine
            </div><div class="t m0 x1 h6 y4c ff3 fs2 fc0 sc0 ls5 ws4">
              Schmutzzulage i.H. von 0,40€ / <span class="ff1">Geleistete Stunde </span>
            </div><div class="t m0 x1 h5 y4d ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y4e ff1 fs2 fc0 sc0 ls5 ws4">
              (3) Bis zum 31.03.2021 gilt:
            </div><div class="t m0 x1 h5 y4f ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y50 ff1 fs2 fc0 sc0 ls5 ws4">
              W<span class="_ _1"></span>ir<span class="_ _0"></span>d <span class="_ _27"> </span>de<span class="_ _1"></span>r <span class="_ _27"> </span>Mitarbeiter <span class="_ _c"> </span>in <span class="_ _27"> </span>Betriebe <span class="_ _c"> </span>in <span class="_ _27"> </span>den <span class="_ _c"> </span>neuen<span class="_ _11"></span>
            </div><div class="t m0 x1 h5 y51 ff1 fs2 fc0 sc0 ls5 ws4">
              Bundesländern <span class="_ _3a"> </span>Mecklenburg-Vorpommern,
            </div><div class="t m0 x1 h5 y52 ff1 fs2 fc0 sc0 ls5 ws4">
              Brandenburg, <span class="_ _2a"> </span>Berlin, <span class="_ _2a"> </span>Sac<span class="_ _1"></span>hsen-Anhalt, <span class="_ _2a"> </span>Thüringen
            </div><div class="t m0 x1 h5 y53 ff1 fs2 fc0 sc0 ls5 ws4">
              und <span class="_ _15"> </span>Sachsen <span class="_ _15"> </span>überlassen, <span class="_ _15"> </span>richten <span class="_ _15"> </span>sich <span class="_ _15"> </span>die <span class="_ _15"> </span>Entgelte
            </div><div class="t m0 x1 h5 y54 ff1 fs2 fc0 sc0 ls5 ws4">
              nach <span class="_ _1"></span>den <span class="_ _1"></span>Entgelttabellen <span class="_ _1"></span>Ost <span class="_ _1"></span>(§ <span class="_ _1"></span>3 <span class="_ _1"></span>Entgelttarifvertrag
            </div><div class="t m0 x1 h5 y55 ff1 fs2 fc0 sc0 ls5 ws4">
              iGZ). <span class="_ _1"></span>Für <span class="_ _16"></span>das <span class="_ _16"></span>Mindeststundenentgelt <span class="_ _1"></span>nach <span class="_ _1"></span>§ <span class="_ _16"></span>3 <span class="_ _1"></span>Nr. <span class="_ _16"></span>1
            </div><div class="t m0 x1 h5 y56 ff1 fs2 fc0 sc0 ls5 ws4">
              des <span class="_ _9"> </span>Tarifvertrags <span class="_ _9"> </span>zur <span class="_ _9"> </span>Regelung <span class="_ _8"> </span>von
            </div><div class="t m0 x1 h5 y57 ff1 fs2 fc0 sc0 ls5 ws4">
              Mindeststundenentgelten <span class="_"> </span>in <span class="_"> </span>der <span class="_"> </span>Zeitarbeit <span class="_"> </span>gilt <span class="_"> </span>d<span class="_ _0"></span>as
            </div><div class="t m0 x1 h5 y58 ff1 fs2 fc0 sc0 ls5 ws4">
              Mindeststundenentgelt <span class="_ _c"> </span>d<span class="_ _11"></span>es<span class="_ _1"></span> <span class="_ _27"> </span>Arbeitsorts. <span class="_ _27"> </span>W<span class="_ _1"></span>ird <span class="_ _27"> </span>der
            </div><div class="t m0 x1 h5 y59 ff1 fs2 fc0 sc0 ls5 ws4">
              Mitarbeiter <span class="_ _4"> </span>a<span class="_ _1"></span>uswärtig <span class="_ _4"> </span>beschäftigt, <span class="_"> </span>be<span class="_ _11"></span>h<span class="_ _1"></span>ält <span class="_ _4"> </span>e<span class="_ _1"></span>r <span class="_ _20"> </span>jedoch
            </div><div class="t m0 x1 h5 y5a ff1 fs2 fc0 sc0 ls5 ws4">
              den Anspruch auf das Mindeststundenentgelt seines<span class="_ _11"></span>
            </div><div class="t m0 x1 h5 y5b ff1 fs2 fc0 sc0 ls5 ws4">
              Einstellungsortes, soweit dieses höher ist.
            </div><div class="t m0 x1 h5 y5c ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y5d ff1 fs2 fc0 sc0 ls5 ws4">
              (4) <span class="_ _1"></span>Ein <span class="_ _1"></span>Anspruch <span class="_ _1"></span>auf <span class="_ _1"></span>Branchenzuschläge <span class="_ _1"></span>ergibt <span class="_ _1"></span>sich
            </div><div class="t m0 x1 h5 y5e ff1 fs2 fc0 sc0 ls5 ws4">
              nach <span class="_ _c"> </span>den <span class="_ _27"> </span>jeweils <span class="_ _c"> </span>geltend<span class="_ _0"></span>en <span class="_ _27"> </span>Tarifverträg<span class="_ _1"></span>en <span class="_ _27"> </span>über
            </div><div class="t m0 x1 h5 y5f ff1 fs2 fc0 sc0 ls5 ws4">
              Branchenzuschläge <span class="_ _11"></span>für <span class="_ _11"></span>Arbeitnehmerüberlassungen.
            </div><div class="t m0 x1 h5 yca ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y61 ff1 fs2 fc0 sc0 ls5 ws4">
              (5) <span class="_ _f"></span>Das <span class="_ _16"></span>tarifliche <span class="_ _16"></span>Entgelt <span class="_ _f"></span>erhält <span class="_ _16"></span>der <span class="_ _f"></span>Mitarbeiter <span class="_ _16"></span>auch
            </div><div class="t m0 x1 h5 ycb ff1 fs2 fc0 sc0 ls5 ws4">
              für <span class="_ _16"></span>Zeiten, <span class="_ _1"></span>in<span class="_ _1"></span> <span class="_ _1"></span>denen <span class="_ _16"></span>er <span class="_ _16"></span>nicht <span class="_ _16"></span>verliehen <span class="_ _1"></span>ist <span class="_ _16"></span>(Nachweis
            </div><div class="t m0 x1 h5 y63 ff1 fs2 fc0 sc0 ls5 ws4">
              gemäß <span class="_ _16"></span>§ <span class="_ _16"></span>11 <span class="_ _16"></span>Absatz <span class="_ _16"></span>1 <span class="_ _16"></span>Sa<span class="_ _1"></span>tz <span class="_ _1"></span>2 <span class="_ _16"></span>Nr. <span class="_ _16"></span>2 <span class="_ _16"></span>AÜG). <span class="_ _16"></span>In <span class="_ _16"></span>d<span class="_ _1"></span>iesen
            </div><div class="t m0 x1 h5 y64 ff1 fs2 fc0 sc0 ls5 ws4">
              Zeiten <span class="_ _11"></span>b<span class="_ _1"></span>esteht <span class="_ _11"></span>kein A<span class="_ _0"></span>nspruch <span class="_ _11"></span>auf Branchenzuschlag.<span class="_ _11"></span>
            </div><div class="t m0 x1 h5 y65 ff1 fs2 fc0 sc0 ls5 ws4">
              Um sich d<span class="_ _11"></span>en Anspruch nach <span class="_ _0"></span>Satz 1 <span class="_ _11"></span>zu sichern, m<span class="_ _11"></span>u<span class="_ _1"></span>ss
            </div><div class="t m0 x1 h5 y66 ff1 fs2 fc0 sc0 ls5 ws4">
              der <span class="_ _4"> </span>Mitarbeiter <span class="_ _15"> </span>m<span class="_ _1"></span>ontags <span class="_ _15"> </span>bis <span class="_ _4"> </span>freitags, <span class="_ _4"> </span>morgens <span class="_ _4"> </span>von
            </div><div class="t m0 x1 h5 y67 ff1 fs2 fc0 sc0 ls5 ws4">
          <span class="bg-gray">________ </span><span class="_ _15"> </span>Uhr <span class="_ _4"> </span>bis <span class="_ _15"> </span><span class="bg-gray">________ </span><span class="_ _4"> </span>Uhr <span class="_ _15"> </span>und <span class="_ _4"> </span>nachmittags
            </div><div class="t m0 x1 h5 y68 ff1 fs2 fc0 sc0 ls5 ws4">
          von <span class="_"> </span><span class="bg-gray">________</span><span class="_ _1"></span> <span class="_"> </span>Uhr <span class="_"> </span>bis <span class="_ _19"> </span><span class="bg-gray">________</span> <span class="_ _19"> </span>Uhr <span class="_"> </span>telefonisch
            </div><div class="t m0 x1 h5 ycc ff1 fs2 fc0 sc0 ls5 ws4">
              erreichbar sein <span class="_ _11"></span>(höchstens 2 x<span class="_ _11"></span> 1,5 <span class="_ _11"></span>Stu<span class="_ _1"></span>nden <span class="_ _0"></span>pro T<span class="_ _0"></span>ag),
            </div><div class="t m0 x1 h5 y6a ff1 fs2 fc0 sc0 ls5 ws4">
              um sich Einsätze zuweisen zu lassen.
            </div><div class="t m0 x1 h5 y6b ff1 fs2 fc0 sc0 ls5 ws4">
              <span class="_ _3b"> </span>
            </div><div class="t m0 x1 h5 y6c ff1 fs2 fc0 sc0 ls5 ws4">
              (6) <span class="_ _1"></span>Ein <span class="_ _1"></span>Anspruch auf <span class="_ _16"></span>Zuschläge, die <span class="_ _1"></span>in <span class="_ _1"></span>Abhängigkeit
            </div><div class="t m0 x1 h5 y6d ff1 fs2 fc0 sc0 ls5 ws4">
              von <span class="_ _11"></span>der Dauer <span class="_ _11"></span>oder der <span class="_ _11"></span>Lage <span class="_ _11"></span>der Arbeitszeit <span class="_ _11"></span>geleistet
            </div><div class="t m0 x1 h5 y6e ff1 fs2 fc0 sc0 ls5 ws4">
              werden, <span class="_ _1b"> </span>richtet <span class="_ _1b"> </span>sich <span class="_ _e"> </span>insbesondere <span class="_ _23"> </span>na<span class="_ _1"></span>ch <span class="_ _1b"> </span>§ <span class="_ _1b"> </span>4
            </div><div class="t m0 x1 h5 y6f ff1 fs2 fc0 sc0 ls5 ws4">
              Manteltarifvertrag <span class="_ _14"> </span>iGZ. <span class="_ _14"> </span>Ein <span class="_ _23"> </span>Anspruch <span class="_ _14"> </span>auf <span class="_ _14"> </span>e<span class="_ _1"></span>ine
            </div><div class="t m0 x1 h5 y70 ff1 fs2 fc0 sc0 ls5 ws4">
              einsatzbezogene <span class="_ _c"> </span>Zulage <span class="_ _2a"> </span>richtet <span class="_ _c"> </span>s<span class="_ _1"></span>ich <span class="_ _c"> </span>nach <span class="_ _2a"> </span>§ <span class="_ _c"> </span>5
            </div><div class="t m0 x1 h5 y71 ff1 fs2 fc0 sc0 ls5 ws4">
              Entgeltrahmentarifvertrag <span class="_ _c"> </span>iGZ, <span class="_ _c"> </span>ein <span class="_ _c"> </span>Anspruch <span class="_ _c"> </span>auf
            </div><div class="t m0 x1 h5 y72 ff1 fs2 fc0 sc0 ls5 ws4">
              Jahressonderzahlungen <span class="_ _16"></span>n<span class="_ _1"></span>ach <span class="_ _16"></span>§ <span class="_ _f"></span>8 <span class="_ _16"></span>Manteltari<span class="_ _1"></span>fvertrag
            </div><div class="t m0 x1 h5 y73 ff1 fs2 fc0 sc0 ls5 ws4">
              iGZ.
            </div><div class="t m0 x1 h5 y74 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y75 ff1 fs2 fc0 sc0 ls5 ws4">
              (7) <span class="_ _c"> </span>Die <span class="_ _2a"> </span>Vergütung <span class="_ _c"> </span>ist <span class="_ _c"> </span>auf <span class="_ _2a"> </span>ein <span class="_ _c"> </span>vom <span class="_ _c"> </span>Mitarbeiter
            </div><div class="t m0 x1 h5 y76 ff1 fs2 fc0 sc0 ls5 ws4">
              anzugebendes <span class="_ _15"> </span>Konto <span class="_ _10"> </span>zu <span class="_ _10"> </span>überweisen. <span class="_ _15"> </span>Die <span class="_ _10"> </span>Fälligkeit
            </div><div class="t m0 x1 h5 y77 ff1 fs2 fc0 sc0 ls5 ws4">
              richtet sich nach § 11 Manteltarifvertrag iGZ.
            </div><div class="t m0 x1 h5 y78 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y79 ff1 fs2 fc0 sc0 ls5 ws4">
              (8) <span class="_ _f"></span>Der <span class="_ _f"></span>Anspruch <span class="_ _f"></span>auf <span class="_ _f"></span>Aufwendungsersatz <span class="_ _f"></span>bestimm<span class="lse">t </span>
            </div><div class="t m0 x1 h5 y7a ff1 fs2 fc0 sc0 ls5 ws4">
              sich <span class="_ _f"></span>nach <span class="_ _16"></span>§ <span class="_ _f"></span>670 <span class="_ _16"></span>BGB. <span class="_ _f"></span>Es <span class="_ _16"></span>können <span class="_ _f"></span>für <span class="_ _16"></span>jeden <span class="_ _f"></span>Einsatz
            </div><div class="t m0 x1 h5 y7b ff1 fs2 fc0 sc0 ls5 ws4">
              gesonderte <span class="_"> </span>Vereinbarungen <span class="_"> </span>getroffen <span class="_"> </span>werden. <span class="_"> </span>Als<span class="_ _11"></span>
            </div><div class="t m0 x1 h5 y7c ff1 fs2 fc0 sc0 ls5 ws4">
              erste <span class="_ _27"> </span>Tätigkeitsstätte <span class="_ _27"> </span>im <span class="_ _27"> </span>Sinne <span class="_ _27"> </span>des <span class="_ _27"> </span>ste<span class="_ _1"></span>uerlichen<span class="_ _0"></span>
            </div><div class="t m0 x1 h5 y7d ff1 fs2 fc0 sc0 ls5 ws4">
              Reisekostenrechts w<span class="_ _11"></span>i<span class="_ _1"></span>rd der <span class="_ _11"></span>Betrieb des <span class="_ _11"></span>Arbeitgebers
            </div><div class="t m0 x1 h5 y7e ff1 fs2 fc0 sc0 ls5 ws4">
              festgelegt, <span class="_ _26"> </span>di<span class="_ _1"></span>e <span class="_ _26"> </span>betreuende <span class="_ _14"> </span>Niederlassung <span class="_ _26"> </span>unter
            </div><div class="t m0 x1 h5 y7f ff1 fs2 fc0 sc0 ls5 ws4">
              folgender Anschrift:
            </div><div class="t m0 x1 h5 y80 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y81 ff1 fs2 fc0 sc0 ls8 ws7">
          <span class="bg-gray">____________</span><span class="_ _11"></span><span class="bg-gray">_________________</span><span class="_ _11"></span><span class="bg-gray">____________</span>
            </div><div class="t m0 x1 h5 y82 ff1 fs2 fc0 sc0 ls8 ws4">
          <span class="bg-gray">____________</span><span class="_ _11"></span><span class="bg-gray">_________________</span><span class="_ _11"></span><span class="bg-gray">____________</span>
            </div><div class="t m0 x1 h5 y83 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 ydc ff2 fs2 fc0 sc0 ls5 ws4">
          <b>6 Anrechnungsvorbehalt</b>
            </div><div class="t m0 x1 h5 y85 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y86 ff1 fs2 fc0 sc0 ls5 ws4">
              Über- <span class="_ _32"> </span>und <span class="_ _32"> </span>außertarifliche <span class="_ _32"> </span>Zulagen <span class="_ _32"> </span>mi<span class="_ _1"></span>ndern <span class="_ _2c"> </span>sich,
            </div><div class="t m0 x1 h5 y87 ff1 fs2 fc0 sc0 ls5 ws4">
              ohne <span class="_ _10"> </span>dass <span class="_ _10"> </span>es <span class="_ _15"> </span>einer <span class="_ _f"></span>e<span class="_ _1"></span>ntsprechenden <span class="_ _f"></span>Erklärung <span class="_ _15"> </span>des
            </div><div class="t m0 x1 h5 y88 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitgebers <span class="_ _f"></span>bedarf, <span class="_ _16"></span>um <span class="_ _f"></span>den <span class="_ _16"></span>Betrag <span class="_ _f"></span>einer <span class="_ _f"></span>etwaigen
            </div><div class="t m0 x1 h5 y89 ff1 fs2 fc0 sc0 ls5 ws4">
              zukünftigen <span class="_ _14"> </span>o<span class="_ _1"></span>der <span class="_ _14"> </span>rückwirkenden <span class="_ _23"> </span>Erhöhung <span class="_ _14"> </span>des
            </div><div class="t m0 x6 h5 y45 ff1 fs2 fc0 sc0 ls5 ws4">
              tariflichen <span class="_ _26"> </span>Entgelts <span class="_ _2a"> </span>(insbesondere <span class="_ _26"> </span>Anspruch <span class="_ _2a"> </span>auf
            </div><div class="t m0 x6 h5 y46 ff1 fs2 fc0 sc0 ls5 ws4">
              einsatzbezogene <span class="_ _11"></span>Zulage, <span class="_ _11"></span>Erhöhung <span class="_ _11"></span>a<span class="_ _1"></span>ls <span class="_ _11"></span>Ergebnis <span class="_ _11"></span>von
            </div><div class="t m0 x6 h5 y47 ff1 fs2 fc0 sc0 ls5 ws4">
              Tarifverhandlungen, <span class="_ _3c"> </span>auch <span class="_ _3c"> </span>im <span class="_ _3c"> </span>Falle <span class="_ _3c"> </span>von
            </div><div class="t m0 x6 h5 y48 ff1 fs2 fc0 sc0 ls5 ws4">
              Einmalzahlungen, <span class="_ _1b"> </span>W<span class="_ _1"></span>echsel <span class="_ _e"> </span>des <span class="_ _d"> </span>Einsatzgebiets,
            </div><div class="t m0 x6 h5 y49 ff1 fs2 fc0 sc0 ls5 ws4">
              Anspruch <span class="_ _3d"> </span>auf <span class="_ _3d"> </span>Branchenzuschlag,
            </div><div class="t m0 x6 h5 y4a ff1 fs2 fc0 sc0 ls5 ws4">
              Höhergruppierung). <span class="_ _2c"> </span>Im <span class="_ _2c"> </span>Falle <span class="_ _a"> </span>ei<span class="_ _1"></span>ner <span class="_ _2c"> </span>rückwirkenden
            </div><div class="t m0 x6 h5 y4b ff1 fs2 fc0 sc0 ls5 ws4">
              Erhöhung des tariflichen Entgelts mindern sich<span class="ff2 ls4"> </span>über-
            </div><div class="t m0 x6 h5 y4c ff1 fs2 fc0 sc0 ls5 ws4">
              und <span class="_ _2c"> </span>außertarifliche <span class="_ _a"> </span>Zulagen <span class="_ _a"> </span>rü<span class="_ _1"></span>ckwirkend <span class="_ _a"> </span>auf <span class="_ _2c"> </span>den
            </div><div class="t m0 x6 h5 y4d ff1 fs2 fc0 sc0 ls5 ws4">
              Zeitpunkt der Erhöhung.
            </div><div class="t m0 x6 h5 ydd ff2 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 yde ff2 fs2 fc0 sc0 ls5 ws4">
          <b>7 Widerrufsvorbehalt</b>
            </div><div class="t m0 x6 h5 y50 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y51 ff1 fs2 fc0 sc0 ls5 ws4">
              (1) <span class="_ _11"></span>Die<span class="_ _1"></span> <span class="_ _11"></span>Vertragsparteien v<span class="_ _11"></span>e<span class="_ _1"></span>reinbaren, <span class="_ _11"></span>dass <span class="_ _11"></span>üb<span class="_ _1"></span><span class="ls2 ws3">er</span>- <span class="_ _11"></span>und
            </div><div class="t m0 x6 h5 y52 ff1 fs2 fc0 sc0 ls5 ws4">
              außertarifliche <span class="_ _f"></span>Zulagen <span class="_ _16"></span>als <span class="_ _f"></span>widerrufliche <span class="_ _16"></span>Leistungen
            </div><div class="t m0 x6 h5 y53 ff1 fs2 fc0 sc0 ls5 ws4">
              des <span class="_ _3e"> </span>Arbeitgebers <span class="_ _3e"> </span>erbrac<span class="_ _0"></span>ht <span class="_ _3e"> </span>werden. <span class="_ _3e"> </span>Das
            </div><div class="t m0 x6 h5 y54 ff1 fs2 fc0 sc0 ls5 ws4">
              W<span class="_ _1"></span>iderru<span class="_ _11"></span>fs<span class="_ _1"></span>recht <span class="_ _37"> </span>besteht <span class="_ _37"> </span>auch <span class="_ _37"> </span>für <span class="_ _34"> </span>über- <span class="_ _37"> </span>und
            </div><div class="t m0 x6 h5 y55 ff1 fs2 fc0 sc0 ls5 ws4">
              außertarifliche <span class="_ _26"> </span>Zulagen, <span class="_ _2a"> </span>d<span class="_ _1"></span>ie <span class="_ _2a"> </span>befristet <span class="_ _26"> </span>auf <span class="_ _26"> </span>einen
            </div><div class="t m0 x6 h5 y56 ff1 fs2 fc0 sc0 ls5 ws4">
              bestimmten <span class="_ _16"></span>Einsatz <span class="_ _16"></span>bei <span class="_ _16"></span>einem <span class="_ _16"></span>Kundenunternehmen
            </div><div class="t m0 x6 h5 y57 ff1 fs2 fc0 sc0 ls5 ws4">
              gezahlt <span class="_ _c"> </span>werden. <span class="_ _c"> </span>E<span class="_ _11"></span>i<span class="_ _1"></span>n <span class="_ _27"> </span>W<span class="_ _1"></span>iderruf <span class="_ _c"> </span>entfaltet <span class="_ _27"> </span>s<span class="_ _1"></span>ofortige
            </div><div class="t m0 x6 h5 y58 ff1 fs2 fc0 sc0 ls5 ws4">
              W<span class="_ _1"></span>ir<span class="_ _0"></span>kung. <span class="_ _32"> </span>Der <span class="_ _32"> </span>widerrufliche <span class="_ _32"> </span>Teil <span class="_ _27"> </span>ist <span class="_ _32"> </span>begrenzt <span class="_ _32"> </span>auf
            </div><div class="t m0 x6 h5 y59 ff1 fs2 fc0 sc0 ls5 ws4">
              24,9% der Gesamtvergütung.
            </div><div class="t m0 x6 h5 y5a ff1 fs2 fc0 sc0 ls5 ws4">
              (2) Der <span class="_ _1"></span>Arbeitgeber ist zum W<span class="_ _1"></span>iderruf einer über<span class="_ _1"></span>- und
            </div><div class="t m0 x6 h5 y5b ff1 fs2 fc0 sc0 ls5 ws4">
              außertariflichen <span class="_ _34"> </span>Zulage <span class="_ _37"> </span>aus <span class="_ _34"> </span>betriebsbedingten
            </div><div class="t m0 x6 h5 y5c ff1 fs2 fc0 sc0 ls5 ws4">
              Gründen <span class="_ _37"> </span>berechtigt. <span class="_ _37"> </span>Als <span class="_ _37"> </span> <span class="_ _34"> </span>Gründe <span class="_ _37"> </span>kommen
            </div><div class="t m0 x6 h5 y5d ff1 fs2 fc0 sc0 ls5 ws4">
              insbesondere <span class="_ _31"> </span>starke <span class="_ _31"> </span>wirtschaftliche <span class="_ _31"> </span>Verluste,
            </div><div class="t m0 x6 h5 y5e ff1 fs2 fc0 sc0 ls5 ws4">
              unrentabel <span class="_ _19"> </span>hohe <span class="_ _19"> </span>Be<span class="_ _1"></span>triebskosten, <span class="_"> </span>der <span class="_ _19"> </span>W<span class="_ _1"></span>egfall <span class="_ _19"> </span>des
            </div><div class="t m0 x6 h5 y5f ff1 fs2 fc0 sc0 ls5 ws4">
              Interesses, <span class="_ _15"> </span>bestimmte <span class="_ _10"> </span>Mitarbeite<span class="_ _1"></span>rgruppen <span class="_ _10"> </span>mit <span class="_ _15"> </span>einer
            </div><div class="t m0 x6 h5 yca ff1 fs2 fc0 sc0 ls2 ws3">
              über<span class="ls5 ws4">- <span class="_ _38"> </span>und <span class="_ _3f"> </span>außertariflichen <span class="_ _3f"> </span>Zulag<span class="_ _1"></span>e <span class="_ _3f"> </span>an <span class="_ _38"> </span>das </span>
            </div><div class="t m0 x6 h5 y61 ff1 fs2 fc0 sc0 ls5 ws4">
              Unternehmen <span class="_ _23"> </span>zu <span class="_ _1b"> </span>binden, <span class="_ _14"> </span>d<span class="_ _1"></span>ie <span class="_ _23"> </span>G<span class="_ _1"></span>efährdung <span class="_ _23"> </span>der
            </div><div class="t m0 x6 h5 ycb ff1 fs2 fc0 sc0 ls5 ws4">
              wirtschaftlichen <span class="_ _40"> </span>Bestandsfähigkeit <span class="_ _40"> </span>d<span class="_ _11"></span>e<span class="_ _1"></span>s
            </div><div class="t m0 x6 h5 y63 ff1 fs2 fc0 sc0 ls5 ws4">
              Unternehmens, <span class="_ _a"> </span>oder <span class="_ _a"> </span> <span class="_ _a"> </span>eine <span class="_ _a"> </span>Massenentlassung <span class="_ _a"> </span>im
            </div><div class="t m0 x6 h5 y64 ff1 fs2 fc0 sc0 ls5 ws4">
              Sinne von § 17 KSchG in Betracht.
            </div><div class="t m0 x6 h5 y65 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y66 ff1 fs2 fc0 sc0 ls5 ws4">
              (3) <span class="_ _4"> </span>Über- <span class="_ _4"> </span>und <span class="_ _4"> </span>außertarifliche <span class="_ _15"> </span>Zul<span class="_ _1"></span>agen <span class="_ _15"> </span>d<span class="_ _1"></span>ürfen <span class="_ _15"> </span>auch
            </div><div class="t m0 x6 h5 y67 ff1 fs2 fc0 sc0 ls5 ws4">
              aus <span class="_ _33"> </span>verhaltensbedingten <span class="_ _38"> </span>Gründen <span class="_ _33"> </span>w<span class="_ _11"></span>i<span class="_ _1"></span>derrufen
            </div><div class="t m0 x6 h5 y68 ff1 fs2 fc0 sc0 ls5 ws4">
              werden, <span class="_ _c"> </span>wenn <span class="_ _2a"> </span>der <span class="_ _c"> </span>Mitarbeiter <span class="_ _2a"> </span>mindestens <span class="_ _c"> </span>zwei
            </div><div class="t m0 x6 h5 ycc ff1 fs2 fc0 sc0 ls5 ws4">
              berechtigte <span class="_ _26"> </span>Abmahnungen <span class="_ _26"> </span>innerhalb <span class="_ _26"> </span>von <span class="_ _2a"> </span>s<span class="_ _1"></span>echs
            </div><div class="t m0 x6 h5 y6a ff1 fs2 fc0 sc0 ls5 ws4">
              Monaten <span class="_ _2a"> </span>vor <span class="_ _26"> </span>Ausspruch <span class="_ _c"> </span>d<span class="_ _1"></span>er <span class="_ _c"> </span>W<span class="_ _1"></span>iderrufserklärung
            </div><div class="t m0 x6 h5 y6b ff1 fs2 fc0 sc0 ls5 ws4">
              erhalten <span class="_ _a"> </span>hat. <span class="_ _2c"> </span>Als <span class="_ _19"> </span>W<span class="_ _1"></span>iderrufsgründe <span class="_ _a"> </span>kommen <span class="_ _a"> </span>auch
            </div><div class="t m0 x6 h5 y6c ff1 fs2 fc0 sc0 ls5 ws4">
              mangelnde <span class="_ _2d"> </span>Eignung <span class="_ _2d"> </span>oder <span class="_ _1d"> </span>ei<span class="_ _1"></span>ne <span class="_ _1d"> </span>erhebliche
            </div><div class="t m0 x6 h5 y6d ff1 fs2 fc0 sc0 ls5 ws4">
              Leistungsminderung in Betracht.
            </div><div class="t m0 x6 h5 ydf ff2 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 ye0 ff2 fs2 fc0 sc0 ls5 ws4">
          <b>8 Urlaub / Urlaubsentgelt</b>
            </div><div class="t m0 x6 h5 y70 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y71 ff1 fs2 fc0 sc0 ls5 ws4">
              Es <span class="_ _1f"> </span>wird <span class="_ _1f"> </span>auf <span class="_ _1f"> </span>die <span class="_ _1f"> </span>Urlaubsregelung <span class="_ _1f"> </span>in <span class="_ _1f"> </span>§ <span class="_ _1f"> </span>6
            </div><div class="t m0 x6 h5 y72 ff1 fs2 fc0 sc0 ls5 ws4">
              Manteltarifvertrag <span class="_ _41"> </span>iGZ <span class="_ _41"> </span>verw<span class="_ _0"></span>iesen. <span class="_ _41"> </span>Das
            </div><div class="t m0 x6 h5 y73 ff1 fs2 fc0 sc0 ls5 ws4">
              Urlaubsentgelt <span class="_ _29"> </span>richtet <span class="_ _29"> </span>sich <span class="_ _29"> </span>nach <span class="_ _29"> </span>§ <span class="_ _42"> </span>6a
            </div><div class="t m0 x6 h5 y74 ff1 fs2 fc0 sc0 ls5 ws4">
              Manteltarifvertrag iGZ.
            </div><div class="t m0 x6 h5 y75 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 ye1 ff2 fs2 fc0 sc0 ls5 ws4">
          <b>9 Lohnverpfändung und Lohnabtretung</b>
            </div><div class="t m0 x6 h5 y77 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y78 ff1 fs2 fc0 sc0 ls5 ws4">
              (1) <span class="_ _16"></span>Der <span class="_ _f"></span>M<span class="_ _0"></span>itarbeiter <span class="_ _16"></span>darf <span class="_ _16"></span>s<span class="_ _1"></span>eine <span class="_ _1"></span>Vergütungsansprüche
            </div><div class="t m0 x6 h5 y79 ff1 fs2 fc0 sc0 ls5 ws4">
              weder verpfänden noch abtreten.
            </div><div class="t m0 x6 h5 y7a ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y7b ff1 fs2 fc0 sc0 ls5 ws4">
              (2) <span class="_ _a"> </span>Der <span class="_ _19"> </span>Arb<span class="_ _1"></span>eitgeber <span class="_ _19"> </span>behält <span class="_ _19"> </span>si<span class="_ _1"></span>ch <span class="_ _19"> </span>vor, <span class="_ _a"> </span>nachträglich
            </div><div class="t m0 x6 h5 y7c ff1 fs2 fc0 sc0 ls5 ws4">
              vertragswidrig <span class="_ _26"> </span>vorgenommene <span class="_ _26"> </span>Abtretungen <span class="_ _26"> </span>oder
            </div><div class="t m0 x6 h5 y7d ff1 fs2 fc0 sc0 ls5 ws4">
              Verpfändungen zu genehmigen.
            </div><div class="t m0 x6 h5 y7e ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y7f ff1 fs2 fc0 sc0 ls5 ws4">
              (3) <span class="_ _32"> </span>Die <span class="_ _27"> </span>K<span class="_ _0"></span>osten, <span class="_ _32"> </span>die <span class="_ _32"> </span>dem <span class="_ _32"> </span>Arbeitgeber <span class="_ _32"> </span>durch <span class="_ _32"> </span>die <span class="_ _1"></span>
            </div><div class="t m0 x6 h5 y80 ff1 fs2 fc0 sc0 ls5 ws4">
              Bearbeitung <span class="_ _20"> </span>von <span class="_ _4"> </span>Pfändungen, <span class="_ _20"> </span>Verpfändungen <span class="_ _20"> </span>und
            </div><div class="t m0 x6 h5 y81 ff1 fs2 fc0 sc0 ls5 ws4">
              Abtretungen <span class="_ _1a"> </span>der <span class="_ _1a"> </span>Vergütungsansprüche <span class="_ _12"> </span>d<span class="_ _1"></span>es
            </div><div class="t m0 x6 h5 y82 ff1 fs2 fc0 sc0 ls5 ws4">
              Mitarbeiters <span class="_ _15"> </span>entstehen, <span class="_ _4"> </span>trägt <span class="_ _15"> </span>der <span class="_ _4"> </span>Mitarbeiter. <span class="_ _15"> </span>Diese
            </div><div class="t m0 x6 h6 y83 ff1 fs2 fc0 sc0 ls5 ws4">
              Kosten <span class="_ _16"></span>werden <span class="_ _1"></span>pa<span class="_ _1"></span>uschaliert <span class="_ _1"></span>mit <span class="_ _16"></span>8,<span class="_ _1"></span>- <span class="_ _1"></span><span class="ff3">€ <span class="_ _16"></span>pro <span class="_ _16"></span>Pfändung, </span>
            </div><div class="t m0 x6 h5 y84 ff1 fs2 fc0 sc0 ls5 ws4">
              Abtretung <span class="_"> </span>und <span class="_ _20"> </span>Verpfändung <span class="_ _20"> </span>sowie <span class="_"> </span>gegebenenfalls
            </div><div class="t m0 x6 h6 y85 ff1 fs2 fc0 sc0 ls5 ws4">
              zusätzlich <span class="_ _1"></span>4,<span class="_ _1"></span>- <span class="_ _1"></span><span class="ff3">€ <span class="_ _1"></span> <span class="_ _16"></span>f</span>ür <span class="_ _16"></span>jedes <span class="_ _1"></span>Schreiben <span class="_ _16"></span>sowie <span class="_ _1"></span>1,<span class="_ _1"></span>- <span class="_ _1"></span><span class="ff3">€ <span class="_ _16"></span>pro </span>
            </div><div class="t m0 x6 h5 y86 ff1 fs2 fc0 sc0 ls5 ws4">
              Überweisung. <span class="_ _10"> </span>Dem <span class="_ _10"> </span>Mitarbeiter <span class="_ _10"> </span>bleibt <span class="_ _10"> </span>de<span class="_ _1"></span>r <span class="_ _10"> </span>Nachweis<span class="_ _0"></span>
            </div><div class="t m0 x6 h5 y87 ff1 fs2 fc0 sc0 ls5 ws4">
              vorbehalten, <span class="_ _4"> </span>dass <span class="_ _20"> </span>ein <span class="_ _4"> </span>Schaden <span class="_ _4"> </span>nicht <span class="_ _20"> </span>vorliegt <span class="_ _4"> </span>oder
            </div><div class="t m0 x6 h5 y88 ff1 fs2 fc0 sc0 ls5 ws4">
              wesentlich <span class="_ _26"> </span>geringer <span class="_ _14"> </span>ist. <span class="_ _26"> </span>Bei <span class="_ _26"> </span>Nachweis <span class="_ _26"> </span>höherer
            </div><div class="t m0 x6 h5 y89 ff1 fs2 fc0 sc0 ls5 ws4">
              tatsächlicher <span class="_ _15"> </span>Kosten <span class="_ _10"> </span>ist <span class="_ _15"> </span>der <span class="_ _15"> </span>Arbeitgeber <span class="_ _15"> </span>berechtigt,
            </div>
          </div>
        </div><div
          class="pi"
          data-data="{&quot;ctm&quot;:[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}"
        ></div>
      </div>
      <div
        id="pf4"
        class="pf w0 h0"
        data-page-no="4"
      >
        <div class="pc pc4 w0 h0">
          <div class="c x0 y1 w2 h0">
            <div class="t m0 x1 h2 y2 ff1 fs0 fc0 sc0 ls5 ws4">
              © iGZ
            </div><div class="t m0 x1 h2 y3 ff1 fs0 fc0 sc0 ls5 ws4">
              e.V., nach En<span class="_ _0"></span>tfernung von Log<span class="_ _0"></span>o / Copyrigh<span class="_ _11"></span>t<span class="_ _1"></span> frei zur eigenen <span class="_ _11"></span>Verwendung der iGZ-Mitglieder (S<span class="_ _0"></span>tand: <span class="ls6 ws0">17</span>.02.2020)
            </div>
          </div><div class="c x2 y4 w3 h3">
            <div class="t m0 x3 h2 y5 ff1 fs0 fc0 sc0 ls5 ws4">
              4
            </div>
          </div><div class="c x0 y1 w2 h0">
            <div class="t m0 x1 h5 y45 ff1 fs2 fc0 sc0 ls5 ws4">
              diese <span class="_ _16"></span>in <span class="_ _16"></span>Ansatz <span class="_ _16"></span>zu <span class="_ _16"></span>bring<span class="_ _1"></span>en. <span class="_ _1"></span>Mit <span class="_ _16"></span>di<span class="_ _1"></span>esen <span class="_ _1"></span>Kosten <span class="_ _16"></span>kann
            </div><div class="t m0 x1 h5 y46 ff1 fs2 fc0 sc0 ls5 ws4">
              der <span class="_ _38"> </span>Arbeitgeber <span class="_ _38"> </span>unter <span class="_ _38"> </span>Berücksichtigung <span class="_ _38"> </span>der
            </div><div class="t m0 x1 h5 y47 ff1 fs2 fc0 sc0 ls5 ws4">
              Pfändungsfreigrenzen <span class="_ _43"> </span>mit <span class="_ _43"> </span>Lohnforderungen
            </div><div class="t m0 x1 h5 y48 ff1 fs2 fc0 sc0 ls5 ws4">
              aufrechnen.
            </div><div class="t m0 x1 h5 y49 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 ye2 ff2 fs2 fc0 sc0 ls5 ws4">
          <b>10 <span class="_ _20"> </span>Arbeitsverhinderung <span class="_ _4"> </span>/ <span class="_ _4"> </span>Entgeltfortzahlung <span class="_ _20"> </span>im
          </b></div><div class="t m0 x1 h5 ye3 ff2 fs2 fc0 sc0 ls5 ws4">
              <b>Krankheitsfall</b>
            </div><div class="t m0 x1 h5 y4c ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y4d ff1 fs2 fc0 sc0 ls5 ws4">
              (1) <span class="_ _10"> </span>Der <span class="_ _f"> </span>Mitarbeiter <span class="_ _10"> </span>ist <span class="_ _f"></span>verpflichtet, <span class="_ _10"> </span>dem <span class="_ _10"> </span>Arbeitgeber
            </div><div class="t m0 x1 h5 y4e ff1 fs2 fc0 sc0 ls5 ws4">
              jede <span class="_ _31"> </span>Arbeitsverhinderung<span class="_ _0"></span> <span class="_ _31"> </span>unverzüglich <span class="_ _33"> </span>(ohne
            </div><div class="t m0 x1 h5 y4f ff1 fs2 fc0 sc0 ls5 ws4">
              schuldhaftes <span class="_ _38"> </span>Zögern), <span class="_ _38"> </span>möglichst <span class="_ _38"> </span>jedoch <span class="_ _38"> </span>vor
            </div><div class="t m0 x1 h5 y50 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsbeginn <span class="_ _18"> </span>w<span class="_ _11"></span>ä<span class="_ _1"></span>hrend <span class="_ _21"> </span>der <span class="_ _18"> </span>betrieblichen
            </div><div class="t m0 x1 h5 y51 ff1 fs2 fc0 sc0 ls5 ws4">
              Geschäftszeiten, <span class="_ _20"> </span>sowie <span class="_ _4"> </span>die <span class="_"> </span>v<span class="_ _11"></span>oraussichtliche <span class="_"> </span>D<span class="_ _11"></span>a<span class="_ _1"></span>uer
            </div><div class="t m0 x1 h5 y52 ff1 fs2 fc0 sc0 ls5 ws4">
              anzuzeigen. <span class="_ _a"> </span>Auf <span class="_ _2c"> </span>Verlangen <span class="_ _a"> </span>sind <span class="_ _2c"> </span>die <span class="_ _a"> </span>Gründe <span class="_ _2c"> </span>der
            </div><div class="t m0 x1 h5 y53 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsverhinderung <span class="_"> </span>mitzuteilen; <span class="_"> </span>dies <span class="_"> </span>gil<span class="_ _1"></span>t <span class="_"> </span>nicht <span class="_ _19"> </span>für
            </div><div class="t m0 x1 h5 y54 ff1 fs2 fc0 sc0 ls5 ws4">
              den Grund einer Arbeitsunfähigkeit.
            </div><div class="t m0 x1 h5 y55 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y56 ff1 fs2 fc0 sc0 ls5 ws4">
              (2) Der Mitarbeiter ist verpflichtet, für den ersten Tag
            </div><div class="t m0 x1 h5 y57 ff1 fs2 fc0 sc0 ls5 ws4">
              einer <span class="_ _14"> </span>Arbeitsunfähigkeit <span class="_ _23"> </span>am <span class="_ _14"> </span>gleichen <span class="_ _14"> </span>Tag, <span class="_ _14"> </span>bei
            </div><div class="t m0 x1 h5 y58 ff1 fs2 fc0 sc0 ls5 ws4">
              Unzumutbarkeit <span class="_ _32"> </span>spätestens <span class="_ _32"> </span>am <span class="_ _27"> </span>darauf <span class="_ _32"> </span>folgenden
            </div><div class="t m0 x1 h5 y59 ff1 fs2 fc0 sc0 ls5 ws4">
              Kalendertag <span class="_ _31"> </span>(außer <span class="_ _33"> </span>arbeitsfreie <span class="_ _33"> </span>Son<span class="_ _1"></span>n- <span class="_ _31"> </span>und
            </div><div class="t m0 x1 h5 y5a ff1 fs2 fc0 sc0 ls5 ws4">
              Feiertage), <span class="_ _20"> </span>eine <span class="_ _20"> </span>ärztliche <span class="_"> </span>Be<span class="_ _11"></span>s<span class="_ _1"></span>cheinigung <span class="_ _20"> </span>über <span class="_ _4"> </span>da<span class="_ _1"></span>s
            </div><div class="t m0 x1 h5 y5b ff1 fs2 fc0 sc0 ls5 ws4">
              Bestehen <span class="_ _2b"> </span>de<span class="_ _1"></span>r <span class="_ _2b"> </span>Arbeitsunfähigkeit <span class="_ _2b"> </span>sowi<span class="_ _1"></span>e <span class="_ _2b"> </span>deren
            </div><div class="t m0 x1 h5 y5c ff1 fs2 fc0 sc0 ls5 ws4">
              voraussichtliche <span class="_ _1b"> </span>Dauer <span class="_ _1b"> </span>vorzulegen. <span class="_ _1b"> </span>Dauert <span class="_ _1b"> </span>die
            </div><div class="t m0 x1 h5 y5d ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsunfähigkeit <span class="_ _4"> </span>länger <span class="_ _4"> </span>als <span class="_ _4"> </span>in <span class="_ _20"> </span>der <span class="_ _4"> </span>Bescheinigung
            </div><div class="t m0 x1 h5 y5e ff1 fs2 fc0 sc0 ls5 ws4">
              angegeben, hat <span class="_ _11"></span>d<span class="_ _1"></span>er M<span class="_ _11"></span>itarbeiter umgehend e<span class="_ _11"></span>i<span class="_ _1"></span>ne ne<span class="_ _11"></span>u<span class="_ _1"></span>e
            </div><div class="t m0 x1 h5 y5f ff1 fs2 fc0 sc0 ls5 ws4">
              Bescheinigung vorzulegen.
            </div><div class="t m0 x1 h5 yca ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y61 ff1 fs2 fc0 sc0 ls5 ws4">
              (3) <span class="_"> </span>Die <span class="_ _20"> </span>Entgeltfortzahlung <span class="_ _20"> </span>im <span class="_ _20"> </span>Krankheitsfall <span class="_"> </span>richtet<span class="_ _11"></span>
            </div><div class="t m0 x1 h5 ycb ff1 fs2 fc0 sc0 ls5 ws4">
              sich nach § 6a Manteltarifvertrag iGZ.
            </div><div class="t m0 x1 h5 y63 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 ye4 ff2 fs2 fc0 sc0 ls5 ws4">
          <b>11 Verschwiegenheitsverpflichtungen</b>
            </div><div class="t m0 x1 h5 y65 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y66 ff1 fs2 fc0 sc0 ls5 ws4">
              (1) <span class="_ _26"> </span>Der <span class="_ _26"> </span>Mitarbeiter <span class="_ _26"> </span>verpflichtet <span class="_ _26"> </span>s<span class="_ _1"></span>ich, <span class="_ _26"> </span>über <span class="_ _26"> </span>alle
            </div><div class="t m0 x1 h5 y67 ff1 fs2 fc0 sc0 ls5 ws4">
              Betriebs- <span class="_ _33"> </span>und <span class="_ _38"> </span>Geschäftsgeheimnisse, <span class="_ _33"> </span>sowohl<span class="_ _0"></span>
            </div><div class="t m0 x1 h5 y68 ff1 fs2 fc0 sc0 ls5 ws4">
              während <span class="_ _32"> </span>der <span class="_ _32"> </span>Dauer <span class="_ _2c"> </span>des <span class="_ _32"> </span>Arbeitsverhältnisses <span class="_ _32"> </span>als
            </div><div class="t m0 x1 h5 ycc ff1 fs2 fc0 sc0 ls5 ws4">
              auch <span class="_ _32"> </span>nach <span class="_ _32"> </span>seiner <span class="_ _32"> </span>Beendigung <span class="_ _32"> </span>Stillschweigen <span class="_ _32"> </span>zu
            </div><div class="t m0 x1 h5 y6a ff1 fs2 fc0 sc0 ls5 ws4">
              bewahren. <span class="_ _f"></span>Die <span class="_ _f"></span>Geheimhaltungspflicht <span class="_ _f"></span>erstreckt <span class="_ _16"></span>s<span class="_ _1"></span>ich
            </div><div class="t m0 x1 h5 y6b ff1 fs2 fc0 sc0 ls5 ws4">
              nicht <span class="_ _2b"> </span>auf <span class="_ _2b"> </span>solche <span class="_ _2b"> </span>Kenntnisse, <span class="_ _2b"> </span>die <span class="_ _2b"> </span>jedermann
            </div><div class="t m0 x1 h5 y6c ff1 fs2 fc0 sc0 ls5 ws4">
              zugänglich <span class="_ _2c"> </span>s<span class="_ _1"></span>ind <span class="_ _32"> </span>oder <span class="_ _32"> </span>deren <span class="_ _a"> </span>W<span class="_ _1"></span>eitergabe <span class="_ _32"> </span>für <span class="_ _32"> </span>den
            </div><div class="t m0 x1 h5 y6d ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitgeber <span class="_ _1c"> </span>ersichtlich <span class="_ _1c"> </span>ohne <span class="_ _1c"> </span>Nachteil <span class="_ _1c"> </span>ist. <span class="_ _1c"> </span>Im
            </div><div class="t m0 x1 h5 y6e ff1 fs2 fc0 sc0 ls5 ws4">
              Zweifelsfalle sind j<span class="_ _1"></span>edoch technische, kaufmännische
            </div><div class="t m0 x1 h5 y6f ff1 fs2 fc0 sc0 ls5 ws4">
              und <span class="_ _11"></span>persönliche <span class="_ _11"></span>Vorgänge<span class="_ _1"></span> <span class="_ _11"></span>und <span class="_ _11"></span>Verhältnisse, <span class="_ _11"></span>die <span class="_ _11"></span>dem
            </div><div class="t m0 x1 h5 y70 ff1 fs2 fc0 sc0 ls5 ws4">
              Mitarbeiter <span class="_ _4"> </span>im <span class="_ _4"> </span>Zusammenhang <span class="_ _15"> </span>mit <span class="_ _4"> </span>seiner <span class="_ _4"> </span>Tätigkeit
            </div><div class="t m0 x1 h5 y71 ff1 fs2 fc0 sc0 ls5 ws4">
              bekannt <span class="_ _f"></span>werden, <span class="_ _10"> </span>als <span class="_ _f"></span>Unternehmensgeheimnisse <span class="_ _f"></span>zu
            </div><div class="t m0 x1 h5 y72 ff1 fs2 fc0 sc0 ls5 ws4">
              behandeln. <span class="_ _f"></span>In <span class="_ _f"></span>solchen <span class="_ _f"></span>Fällen <span class="_ _16"></span>i<span class="_ _1"></span>st <span class="_ _f"></span>der <span class="_ _f"></span>Mitarbeiter <span class="_ _f"></span>vor
            </div><div class="t m0 x1 h5 y73 ff1 fs2 fc0 sc0 ls5 ws4">
              der <span class="_ _1"></span>Offenbarung gegenüber <span class="_ _1"></span>Dritten verpflichtet, eine
            </div><div class="t m0 x1 h5 y74 ff1 fs2 fc0 sc0 ls5 ws4">
              W<span class="_ _1"></span>eis<span class="_ _11"></span>u<span class="_ _1"></span>ng <span class="_ _15"> </span>der <span class="_ _4"> </span>Geschäftsleitung <span class="_ _10"> </span>e<span class="_ _1"></span>inzuholen, <span class="_ _15"> </span>ob <span class="_ _15"> </span>ei<span class="_ _1"></span>ne
            </div><div class="t m0 x1 h5 y75 ff1 fs2 fc0 sc0 ls5 ws4">
              bestimmte <span class="_ _a"> </span>Tatsache <span class="_ _2c"> </span>vertraulich <span class="_ _a"> </span>zu <span class="_ _a"> </span>behandeln <span class="_ _2c"> </span>ist
            </div><div class="t m0 x1 h5 y76 ff1 fs2 fc0 sc0 ls5 ws4">
              oder <span class="_ _10"> </span>nicht. <span class="_ _15"> </span>Die <span class="_ _15"> </span>Schweigepflicht <span class="_ _10"> </span>erstreckt <span class="_ _10"> </span>sich <span class="_ _15"> </span>auch
            </div><div class="t m0 x1 h5 y77 ff1 fs2 fc0 sc0 ls5 ws4">
              auf <span class="_ _10"> </span>Angelegenheiten <span class="_ _f"></span>an<span class="_ _1"></span>derer <span class="_ _f"></span>Firmen, <span class="_ _10"> </span>in <span class="_ _10"> </span>denen <span class="_ _f"></span>de<span class="_ _1"></span>r
            </div><div class="t m0 x1 h5 y78 ff1 fs2 fc0 sc0 ls5 ws4">
              Mitarbeiter eingesetzt wird.
            </div><div class="t m0 x1 h5 y79 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y7a ff1 fs2 fc0 sc0 ls5 ws4">
              (2) <span class="_ _16"></span>Über <span class="_ _16"></span>s<span class="_ _1"></span>eine <span class="_ _16"></span>Vergütung <span class="_ _16"></span>hat <span class="_ _16"></span>der <span class="_ _f"></span>Mitarbeiter <span class="_ _16"></span>dritten
            </div><div class="t m0 x1 h5 y7b ff1 fs2 fc0 sc0 ls5 ws4">
              Personen <span class="_ _20"> </span>gegenüber <span class="_"> </span>S<span class="_ _0"></span>tillschweigen <span class="_ _20"> </span>zu <span class="_ _20"> </span>bewahren.
            </div><div class="t m0 x1 h5 y7c ff1 fs2 fc0 sc0 ls5 ws4">
              Dies <span class="_ _15"> </span>gilt <span class="_ _10"> </span>n<span class="_ _1"></span>icht <span class="_ _10"> </span>für <span class="_ _15"> </span>die <span class="_ _15"> </span>Fälle, <span class="_ _15"> </span>in <span class="_ _10"> </span>den<span class="_ _1"></span>en <span class="_ _10"> </span>er <span class="_ _15"> </span>gesetzlich
            </div><div class="t m0 x1 h5 y7d ff1 fs2 fc0 sc0 ls5 ws4">
              berechtigt <span class="_ _4"> </span>oder <span class="_ _4"> </span>verpflichtet <span class="_ _15"> </span>ist, <span class="_ _4"> </span>Angaben <span class="_ _4"> </span>über <span class="_ _4"> </span>sein
            </div><div class="t m0 x1 h5 y7e ff1 fs2 fc0 sc0 ls5 ws4">
              Einkommen <span class="_ _a"> </span>zu <span class="_ _2c"> </span>machen, <span class="_ _a"> </span>wie <span class="_ _a"> </span>b<span class="_ _1"></span>eispielsweise <span class="_ _a"> </span>dem
            </div><div class="t m0 x1 h5 y7f ff1 fs2 fc0 sc0 ls5 ws4">
              Finanzamt, <span class="_ _26"> </span>de<span class="_ _1"></span>r <span class="_ _26"> </span>Agentur <span class="_ _14"> </span>für <span class="_ _14"> </span>Arbeit <span class="_ _26"> </span>oder <span class="_ _14"> </span>einer
            </div><div class="t m0 x1 h5 y80 ff1 fs2 fc0 sc0 ls5 ws4">
              sonstigen staatlichen Stelle.
            </div><div class="t m0 x1 h5 ye5 ff2 fs2 fc3 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 ye6 ff2 fs2 fc0 sc0 ls5 ws4">
          <b>12 Nebentätigkeit</b>
            </div><div class="t m0 x1 h5 y83 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y84 ff1 fs2 fc0 sc0 ls5 ws4">
              Jede <span class="_ _15"> </span>Nebentätigkeit, <span class="_ _10"> </span>gleichgültig, <span class="_ _15"> </span>ob <span class="_ _15"> </span>sie <span class="_ _10"> </span>e<span class="_ _1"></span>ntgeltlich
            </div><div class="t m0 x1 h5 y85 ff1 fs2 fc0 sc0 ls5 ws4">
              oder <span class="_ _e"> </span>une<span class="_ _1"></span>ntgeltlich <span class="_ _e"> </span>ausgeübt <span class="_ _e"> </span>wird, <span class="_ _d"> </span>bedarf <span class="_ _e"> </span>der
            </div><div class="t m0 x1 h5 y86 ff1 fs2 fc0 sc0 ls5 ws4">
              vorherigen <span class="_ _1b"> </span>Zustimmung <span class="_ _e"> </span>des <span class="_ _1b"> </span>Arbeitgebers. <span class="_ _1b"> </span>Die
            </div><div class="t m0 x1 h5 y87 ff1 fs2 fc0 sc0 ls5 ws4">
              Zustimmung <span class="_ _1"></span>is<span class="_ _1"></span>t <span class="_ _1"></span>zu <span class="_ _1"></span>erteilen, <span class="_ _16"></span>wenn <span class="_ _1"></span>die <span class="_ _16"></span>Nebentätigkeit
            </div><div class="t m0 x1 h5 y88 ff1 fs2 fc0 sc0 ls5 ws4">
              die <span class="_ _11"></span>W<span class="_ _1"></span>ahrnehmung der <span class="_ _11"></span>dienstlichen Aufgaben <span class="_ _11"></span>zeitlich
            </div><div class="t m0 x1 h5 y89 ff1 fs2 fc0 sc0 ls5 ws4">
              nicht <span class="_ _27"> </span>oder <span class="_ _27"> </span>allenfalls <span class="_ _32"> </span>un<span class="_ _1"></span>wesentlich <span class="_ _32"> </span>behindert <span class="_ _27"> </span>und
            </div><div class="t m0 x6 h5 y45 ff1 fs2 fc0 sc0 ls5 ws4">
              sonstige <span class="_ _2c"> </span>berechtigte <span class="_ _2c"> </span>Interessen <span class="_ _2c"> </span>des <span class="_ _2c"> </span>Arbeitgebers
            </div><div class="t m0 x6 h5 y46 ff1 fs2 fc0 sc0 ls5 ws4">
              nicht beeinträchtigt werden.
            </div><div class="t m0 x6 h5 ye7 ff2 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 ydb ff2 fs2 fc0 sc0 ls5 ws4">
          <b>13 Beendigung des Arbeitsverhältnisses</b>
            </div><div class="t m0 x6 h5 y49 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y4a ff1 fs2 fc0 sc0 ls5 ws4">
              (1) <span class="_ _4"> </span>Die <span class="_ _4"> </span>Kündigungsfristen <span class="_ _15"> </span>richten <span class="_ _4"> </span>sich <span class="_ _15"> </span>na<span class="_ _1"></span>ch <span class="_ _15"> </span>§ <span class="_ _4"> </span>2.2.
            </div><div class="t m0 x6 h5 y4b ff1 fs2 fc0 sc0 ls5 ws4">
              Manteltarifvertrag iGZ.
            </div><div class="t m0 x6 h5 y4c ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y4d ff1 fs2 fc0 sc0 ls5 ws4">
              (2) <span class="_ _20"> </span>Jede <span class="_ _20"> </span>fristlos <span class="_ _4"> </span>ausgesprochene <span class="_ _20"> </span>außerordentliche
            </div><div class="t m0 x6 h5 y4e ff1 fs2 fc0 sc0 ls5 ws4">
              Kündigung <span class="_ _e"> </span>g<span class="_ _1"></span>ilt <span class="_ _e"> </span>immer <span class="_ _e"> </span>al<span class="_ _1"></span>s <span class="_ _e"> </span>zugle<span class="_ _1"></span>ich <span class="_ _e"> </span>hilfsweise
            </div><div class="t m0 x6 h5 y4f ff1 fs2 fc0 sc0 ls5 ws4">
              ordentlich <span class="_"> </span>ausgesprochene <span class="_ _20"> </span>Kündigung. <span class="_ _20"> </span>Jede <span class="_"> </span>nicht
            </div><div class="t m0 x6 h5 y50 ff1 fs2 fc0 sc0 ls5 ws4">
              die <span class="_ _1"></span>Frist <span class="_ _1"></span>wahrende ordentliche Kü<span class="_ _1"></span>ndigung gilt <span class="_ _1"></span>immer
            </div><div class="t m0 x6 h5 y51 ff1 fs2 fc0 sc0 ls5 ws4">
              zugleich <span class="_ _16"></span>als <span class="_ _16"></span>zum <span class="_ _f"></span>nächstzul<span class="_ _0"></span>ässigen <span class="_ _16"></span>Termin, <span class="_ _16"></span>der <span class="_ _16"></span>sich
            </div><div class="t m0 x6 h5 y52 ff1 fs2 fc0 sc0 ls5 ws4">
              nach <span class="_ _1"></span>§ <span class="_ _1"></span>2.2. <span class="_ _1"></span>Manteltarifvertrag <span class="_ _1"></span>iGZ <span class="_ _1"></span>i.V.m. <span class="_ _1"></span>§ <span class="_ _16"></span>622 <span class="_ _1"></span>BGB
            </div><div class="t m0 x6 h5 y53 ff1 fs2 fc0 sc0 ls5 ws4">
              berechnet, ausgesprochene Kündigung.
            </div><div class="t m0 x6 h5 y54 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y55 ff1 fs2 fc0 sc0 ls5 ws4">
              (3) <span class="_ _f"></span>Stellt <span class="_ _10"> </span>der <span class="_ _f"></span>Arbeitgeber <span class="_ _f"> </span>d<span class="_ _1"></span>en <span class="_ _f"></span>Mitarbeiter <span class="_ _f"> </span>unter <span class="_ _10"> </span>den
            </div><div class="t m0 x6 h5 y56 ff1 fs2 fc0 sc0 ls5 ws4">
              Voraussetzungen des § 3.2.5. M<span class="_ _11"></span>ante<span class="_ _1"></span>ltarifvertrag iGZ
            </div><div class="t m0 x6 h5 y57 ff1 fs2 fc0 sc0 ls5 ws4">
              frei, <span class="_ _1"></span>werden <span class="_ _1"></span>Guthaben aus <span class="_ _1"></span>dem Arbeitszeitkonto <span class="_ _1"></span>vor
            </div><div class="t m0 x6 h5 y58 ff1 fs2 fc0 sc0 ls5 ws4">
              Urlaubsansprüchen verwendet.
            </div><div class="t m0 x6 h5 y59 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 ye8 ff2 fs2 fc0 sc0 ls5 ws4">
          <b>14 Unfallverhütung / Arbeitsschutz</b>
            </div><div class="t m0 x6 h5 y5b ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y5c ff1 fs2 fc0 sc0 ls5 ws4">
              Der <span class="_ _3f"> </span>Mitarbeiter <span class="_ _3f"> </span>wird <span class="_ _34"> </span>über <span class="_ _38"> </span>die <span class="_ _34"> </span>j<span class="_ _1"></span>eweils <span class="_ _34"> </span>im
            </div><div class="t m0 x6 h5 y5d ff1 fs2 fc0 sc0 ls5 ws4">
              Kundenbetrieb <span class="_ _44"> </span>geltenden
            </div><div class="t m0 x6 h5 y5e ff1 fs2 fc0 sc0 ls5 ws4">
              Unfallverhütungsvorschriften <span class="_ _41"> </span>aufgeklärt. <span class="_ _6"> </span>Er
            </div><div class="t m0 x6 h5 y5f ff1 fs2 fc0 sc0 ls5 ws4">
              verpflichtet <span class="_ _11"></span>sich <span class="_ _11"></span>zur <span class="_ _45"></span>Einhaltung, <span class="_ _45"></span>insbesondere <span class="_ _11"></span>(soweit
            </div><div class="t m0 x6 h5 yca ff1 fs2 fc0 sc0 ls5 ws4">
              erforderlich) <span class="_ _31"> </span>zum <span class="_ _31"> </span>Tragen <span class="_ _31"> </span>der <span class="_ _31"> </span>persönlichen
            </div><div class="t m0 x6 h5 y61 ff1 fs2 fc0 sc0 ls5 ws4">
              Schutzausrüstung. <span class="_ _f"></span>Etwaige <span class="_ _f"></span>Arbeitsunfälle <span class="_ _f"></span>sind <span class="_ _f"></span>dem
            </div><div class="t m0 x6 h5 ycb ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitgeber unverzüglich anzuzeigen.
            </div><div class="t m0 x6 h5 y63 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 ye4 ff2 fs2 fc0 sc0 ls5 ws4">
          <b>15 Vertragsstrafen </b><span class="ff1"> </span>
            </div><div class="t m0 x6 h5 y65 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y66 ff1 fs2 fc0 sc0 ls5 ws4">
              Regelungen <span class="_ _2c"> </span>zu <span class="_ _2c"> </span>Vertragsstrafen <span class="_ _2c"> </span>können <span class="_ _2c"> </span>sich <span class="_ _2c"> </span>aus
            </div><div class="t m0 x6 h5 y67 ff1 fs2 fc0 sc0 ls5 ws4">
              einem <span class="_ _2d"> </span>gesonderten <span class="_ _2d"> </span>Dokument <span class="_ _2d"> </span>zu <span class="_ _1d"> </span>di<span class="_ _1"></span>esem
            </div><div class="t m0 x6 h5 y68 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsvertrag ergeben.
            </div><div class="t m0 x6 h5 ycc ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 ye9 ff2 fs2 fc0 sc0 ls5 ws4">
          <b>16 Schriftformklausel</b>
            </div><div class="t m0 x6 h5 y6b ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y6c ff1 fs2 fc0 sc0 ls5 ws4">
              Nebenabreden <span class="_ _f"></span>wurden <span class="_ _f"></span>nicht <span class="_ _f"></span>getroffen. <span class="_ _f"></span>Änderungen
            </div><div class="t m0 x6 h5 y6d ff1 fs2 fc0 sc0 ls5 ws4">
              des <span class="_ _1b"> </span>Vertrages <span class="_ _1b"> </span>und <span class="_ _23"> </span>Nebenabreden, <span class="_ _1b"> </span>sowie <span class="_ _23"> </span>die
            </div><div class="t m0 x6 h5 y6e ff1 fs2 fc0 sc0 ls5 ws4">
              Änderung <span class="_ _2c"> </span>dieses <span class="_ _2c"> </span>Schriftformgebotes <span class="_ _2c"> </span>bedürfen <span class="_ _2c"> </span>zu
            </div><div class="t m0 x6 h5 y6f ff1 fs2 fc0 sc0 ls5 ws4">
              ihrer <span class="_ _f"></span>W<span class="_ _16"></span>irksamkeit <span class="_ _10"> </span>der <span class="_ _15"> </span>Schriftform. <span class="_ _10"> </span>Der <span class="_ _10"> </span>Vo<span class="_ _1"></span>rrang <span class="_ _10"> </span>der
            </div><div class="t m0 x6 h5 y70 ff1 fs2 fc0 sc0 ls5 ws4">
              Individualabrede <span class="_ _15"> </span>gemäß <span class="_ _4"> </span>§ <span class="_ _15"> </span>305b <span class="_ _15"> </span>BGB <span class="_ _4"> </span>bleibt <span class="_ _15"> </span>davon
            </div><div class="t m0 x6 h5 y71 ff1 fs2 fc0 sc0 ls5 ws4">
              unberührt.
            </div><div class="t m0 xa h5 y72 ff1 fs2 fc0 sc0 ls4 ws4">
            </div><div class="t m0 x6 h5 yea ff2 fs2 fc0 sc0 ls5 ws4">
          <b>17 Vertretungsberechtigung</b>
            </div><div class="t m0 x6 h5 y74 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y75 ff1 fs2 fc0 sc0 ls5 ws4">
              (1) <span class="_ _11"></span>Auf <span class="_ _11"></span>Arbe<span class="_ _1"></span>itgeberseite <span class="_ _11"></span>sind <span class="_ _11"></span>zur <span class="_ _11"></span>Abgabe <span class="_ _11"></span>aller rechts-
            </div><div class="t m0 x6 h5 y76 ff1 fs2 fc0 sc0 ls5 ws1">
              erhebliche<span class="ls11 ws4">n <span class="_"> </span><span class="ls5">Erklärungen, <span class="_ _4"> </span>die <span class="_ _4"> </span>sich <span class="_ _4"> </span>a<span class="_ _1"></span>uf <span class="_ _4"> </span>die <span class="_ _20"> </span>Begrün-</span></span>
            </div><div class="t m0 x6 h5 y77 ff1 fs2 fc0 sc0 ls2">
              du<span class="ls5 ws4">ng, <span class="_ _10"> </span>Durchführung <span class="_ _f"></span>und <span class="_ _10"> </span>Beendigung <span class="_ _15"> </span>einschließlich </span>
            </div><div class="t m0 x6 h5 y78 ff1 fs2 fc0 sc0 ls5 ws4">
              der <span class="_"> </span>Kündi<span class="_ _0"></span>gung <span class="_"> </span>d<span class="_ _11"></span>es <span class="_"> </span>Arbeitsverhältnisses <span class="_ _20"> </span>beziehen,
            </div><div class="t m0 x6 h5 y79 ff1 fs2 fc0 sc0 ls5 ws4">
              der <span class="_ _19"> </span>Inhaber <span class="_"> </span>/ <span class="_ _19"> </span>die <span class="_ _19"> </span>Geschäftsführer, <span class="_"> </span>d<span class="_ _1"></span>ie <span class="_"> </span>Niederlas<span class="_ _1"></span>-
            </div><div class="t m0 x6 h5 y7a ff1 fs2 fc0 sc0 ls5 ws4">
              sungsleiter <span class="_ _f"></span>und <span class="_ _10"> </span>die <span class="_ _f"></span>Personaldisponenten <span class="_ _f"></span>berechtigt
            </div><div class="t m0 x6 h5 y7b ff1 fs2 fc0 sc0 ls5 ws4">
              und zwar jeweils alleinhandelnd.
            </div><div class="t m0 x6 h5 y7c ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y7d ff1 fs2 fc0 sc0 ls5 ws4">
              (2) Den Namen <span class="_ _11"></span>d<span class="_ _1"></span>er <span class="_ _0"></span>in Absatz <span class="_ _11"></span>1 genannten Personen
            </div><div class="t m0 x6 h5 y7e ff1 fs2 fc0 sc0 ls5 ws4">
              kann <span class="_ _11"></span>der <span class="_ _11"></span>Mitarbeite<span class="_ _1"></span>r <span class="_ _11"></span>auf <span class="_ _11"></span>folgendem <span class="_ _45"></span>W<span class="_ _1"></span>eg <span class="_ _11"></span>in <span class="_ _0"></span>Erfahrung
            </div><div class="t m0 x6 h5 y7f ff1 fs2 fc0 sc0 ls5 ws4">
              bringen:
            </div><div class="t m0 x6 h5 y80 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h5 y81 ff4 fs2 fc0 sc0 ls0">
              <div class="checkboxdiv"></div>
              <span class="ff1 ls5 ws4"> <span class="_ _2b"> </span>Innerhalb <span class="_ _16"></span>der <span class="_ _16"></span>Geschäftszeiten <span class="_ _1"></span>d<span class="_ _1"></span>er <span class="_ _1"></span>b<span class="_ _1"></span>etreuenden </span>
            </div><div class="t m0 x7 h5 y82 ff1 fs2 fc0 sc0 ls5 ws4">
              Niederlassung <span class="_ _a"> </span>von <span class="_ _a"> </span>08:00 <span class="_ _2c"> </span>Uhr <span class="_ _19"> </span>bis <span class="_ _a"> </span>17:00 <span class="_ _a"> </span>Uhr
            </div><div class="t m0 x7 h5 y83 ff1 fs2 fc0 sc0 ls5 ws4">
              telefonisch <span class="_ _15"> </span>unter <span class="_ _4"> </span>0221 <span class="_ _15"> </span>3795390 <span class="_ _4"> </span>oder <span class="_ _15"> </span>per <span class="_ _4"> </span>Mail
            </div><div class="t m0 x7 h5 y84 ff1 fs2 fc0 sc0 ls8 ws4">
          über <span class="bg-gray">________</span><span class="_ _11"></span><span class="bg-gray">___________________.</span><span class="_ _11"></span>
            </div><div class="t m0 x7 h5 y85 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x6 h6 y86 ff4 fs2 fc0 sc0 ls0">
              <div class="checkboxdiv"></div>
              <span class="ff1 ls5 ws4"> <span class="_ _2b"> </span>Über <span class="_ _1"></span>den <span class="ff3">Aushang <span class="_ _1"></span>am „Sc<span class="_ _1"></span>hwarzen Brett“ <span class="_ _1"></span>in <span class="_ _1"></span></span><span class="ls2 ws3">der</span> </span>
            </div><div class="t m0 x7 h5 y87 ff1 fs2 fc0 sc0 ls5 ws4">
              betreuenden <span class="_"> </span>Niederlassung <span class="_"> </span>des <span class="_"> </span>Arbeitgebers,
            </div><div class="t m0 x7 h5 y88 ff1 fs2 fc0 sc0 ls5 ws4">
              die <span class="_ _1c"> </span>unter <span class="_ _d"> </span>Punkt <span class="_ _1c"> </span>5 <span class="_ _d"> </span>Absatz <span class="_ _d"> </span>8<span class="_ _1"></span> <span class="_ _d"> </span>als<span class="_ _1"></span> <span class="_ _d"> </span>erste
            </div><div class="t m0 x7 h5 y89 ff1 fs2 fc0 sc0 ls5 ws4">
              Tätigkeitsstätte <span class="_ _e"> </span>festgelegt <span class="_ _1b"> </span>worden <span class="_ _e"> </span>ist. <span class="_ _e"> </span>Der
            </div>
          </div>
        </div><div
          class="pi"
          data-data="{&quot;ctm&quot;:[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}"
        ></div>
      </div>
      <div
        id="pf5"
        class="pf w0 h0"
        data-page-no="5"
      >
        <div class="pc pc5 w0 h0">
          <div class="c x0 y1 w2 h0">
            <div class="t m0 x1 h2 y2 ff1 fs0 fc0 sc0 ls5 ws4">
              © iGZ
            </div><div class="t m0 x1 h2 y3 ff1 fs0 fc0 sc0 ls5 ws4">
              e.V., nach En<span class="_ _0"></span>tfernung von Log<span class="_ _0"></span>o / Copyrigh<span class="_ _11"></span>t<span class="_ _1"></span> frei zur eigenen <span class="_ _11"></span>Verwendung der iGZ-Mitglieder (S<span class="_ _0"></span>tand: <span class="ls6 ws0">17</span>.02.2020)
            </div>
          </div><div class="c x2 y4 w3 h3">
            <div class="t m0 x3 h2 y5 ff1 fs0 fc0 sc0 ls5 ws4">
              5
            </div>
          </div><div class="c x0 y1 w2 h0">
            <div class="t m0 x8 h5 y45 ff1 fs2 fc0 sc0 ls5 ws4">
              Mitarbeiter <span class="_"> </span>muss <span class="_"> </span>sich <span class="_ _19"> </span>mindestens <span class="_"> </span>einmal <span class="_"> </span>pro
            </div><div class="t m0 x8 h6 y46 ff3 fs2 fc0 sc0 ls5 ws4">
              Kalendermonat <span class="_ _30"> </span>am <span class="_ _3e"> </span>„Schwarzen <span class="_ _3e"> </span>Brett“
            </div><div class="t m0 x8 h5 y47 ff1 fs2 fc0 sc0 ls5 ws4">
              informieren.
            </div><div class="t m0 x1 h5 y48 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 yeb ff2 fs2 fc0 sc0 ls5 ws4">
          <b>18 Hinweispflicht des Mitarbeiters</b>
            </div><div class="t m0 x1 h5 y4a ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y4b ff1 fs2 fc0 sc0 ls5 ws4">
              Der Mitarbeiter ist verpflichtet, dem Arbeitgeber
            </div><div class="t m0 x1 h5 y4c ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y4d ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>al<span class="_ _1"></span>le früheren Arbeitgeber anzugeben, bei d<span class="_ _1"></span>enen
            </div><div class="t m0 x8 h5 y4e ff1 fs2 fc0 sc0 ls5 ws4">
              er <span class="_"> </span>in <span class="_"> </span>den <span class="_"> </span>letzten <span class="_ _19"> </span>sechs <span class="_"> </span>Monaten <span class="_"> </span>vor <span class="_"> </span>Beginn
            </div><div class="t m0 x8 h5 y4f ff1 fs2 fc0 sc0 ls5 ws4">
              dieses Arbeitsverhältnisses beschäftigt war,
            </div><div class="t m0 x1 h5 y50 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>al<span class="_ _1"></span>le <span class="_ _11"></span>Kundenunternehmen anzugeben, <span class="_ _11"></span>bei denen
            </div><div class="t m0 x8 h5 y51 ff1 fs2 fc0 sc0 ls5 ws4">
              er in <span class="_ _11"></span>den<span class="_ _1"></span> <span class="_ _11"></span>letzten vier M<span class="_ _11"></span>onaten<span class="_ _1"></span> <span class="_ _11"></span>vor Beginn dieses
            </div><div class="t m0 x8 h5 y52 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsverhältnisses <span class="_ _42"> </span>als <span class="_ _42"> </span>Zeitarbeitnehmer
            </div><div class="t m0 x8 h5 y53 ff1 fs2 fc0 sc0 ls5 ws4">
              eingesetzt war,
            </div><div class="t m0 x1 h5 y54 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>di<span class="_ _1"></span>e <span class="_ _11"></span>Gewährung <span class="_ _11"></span>des <span class="_ _0"></span>Zugangs <span class="_ _11"></span>zu <span class="_ _11"></span>Gemeinschafts<span class="_ _1"></span>-
            </div><div class="t m0 x8 h5 y55 ff1 fs2 fc0 sc0 ls8 ws4">
              einrichtunge<span class="_ _11"></span>n,<span class="_ _1"></span> <span class="_ _23"> </span>von <span class="_ _14"> </span>Sachzuw<span class="_ _11"></span>endungen <span class="_ _23"> </span>oder
            </div><div class="t m0 x8 h5 y56 ff1 fs2 fc0 sc0 ls5 ws4">
              sonstigen <span class="_ _15"> </span>Leistungen <span class="_ _10"> </span>von <span class="_ _15"> </span>Seiten <span class="_ _15"> </span>des <span class="_ _15"> </span>Kunden-
            </div><div class="t m0 x8 h5 y57 ff1 fs2 fc0 sc0 ls5 ws4">
              betriebes anzuzeigen,
            </div><div class="t m0 x1 h5 y58 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>je<span class="_ _1"></span>de <span class="_ _f"></span>Än<span class="_ _1"></span>derung <span class="_ _f"></span>seiner <span class="_ _f"></span>W<span class="_ _16"></span>ohnadresse <span class="_ _f"></span>sowie <span class="_ _10"> </span>der
            </div><div class="t m0 x8 h5 y59 ff1 fs2 fc0 sc0 ls5 ws4">
              steuerlichen und sozialversicherungsrechtlichen
            </div><div class="t m0 x8 h5 y5a ff1 fs2 fc0 sc0 ls5 ws4">
              Verhältnisse <span class="_ _e"> </span>- <span class="_ _1b"> </span>insbesondere, <span class="_ _1b"> </span>wenn <span class="_ _1b"> </span>neben
            </div><div class="t m0 x8 h5 y5b ff1 fs2 fc0 sc0 ls5 ws4">
              diesem <span class="_ _a"> </span>Beschäftigungsverhältnis <span class="_ _19"> </span>ein <span class="_ _a"> </span>weiteres
            </div><div class="t m0 x8 h5 y5c ff1 fs2 fc0 sc0 ls5 ws4">
              (geringfügiges) <span class="_ _f"></span>Arbeitsverhältnis <span class="_ _f"></span>aufgenommen
            </div><div class="t m0 x8 h5 y5d ff1 fs2 fc0 sc0 ls5 ws4">
              wird - unverzüglich mitzuteilen, und
            </div><div class="t m0 x1 h5 y5e ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>je<span class="_ _1"></span>den <span class="_ _11"></span>angekündigten <span class="_ _11"></span>oder <span class="_ _11"></span>b<span class="_ _1"></span>ereits <span class="_ _11"></span>stattfindenden
            </div><div class="t m0 x8 h5 y5f ff1 fs2 fc0 sc0 ls5 ws4">
              Streik <span class="_ _3c"> </span>im <span class="_ _3c"> </span>Kundenbetrieb <span class="_ _3c"> </span>unverzüglich
            </div><div class="t m0 x8 h5 yca ff1 fs2 fc0 sc0 ls5 ws4">
              mitzuteilen.
            </div><div class="t m0 x1 h5 yec ff2 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y62 ff2 fs2 fc0 sc0 ls5 ws4">
          <b>19 Datengeheimnis / Datenschutz</b>
            </div><div class="t m0 x1 h5 yed ff2 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y64 ff1 fs2 fc0 sc0 ls5 ws4">
              (1) <span class="_ _19"> </span>Der <span class="_ _a"> </span>Mitarbeiter <span class="_ _19"> </span>wird <span class="_ _19"> </span>auf <span class="_ _19"> </span>da<span class="_ _1"></span>s <span class="_ _19"> </span>Datengeheimnis
            </div><div class="t m0 x1 h5 y65 ff1 fs2 fc0 sc0 ls5 ws4">
              verpflichtet <span class="_ _15"> </span>und <span class="_ _10"> </span>au<span class="_ _1"></span>f <span class="_ _10"> </span>die <span class="_ _15"> </span>Strafbarkeit <span class="_ _15"> </span>von <span class="_ _10"> </span>Ve<span class="_ _1"></span>rstößen
            </div><div class="t m0 x1 h5 y66 ff1 fs2 fc0 sc0 ls5 ws4">
              hingewiesen. <span class="_"> </span>Es <span class="_"> </span>ist <span class="_"> </span>untersagt, <span class="_"> </span>personenbezogene<span class="_ _11"></span>
            </div><div class="t m0 x1 h5 y67 ff1 fs2 fc0 sc0 ls5 ws4">
              Daten <span class="_ _1"></span>unbefugt <span class="_ _1"></span>zu <span class="_ _1"></span>verarbeiten. Ve<span class="_ _1"></span>rstöße g<span class="_ _1"></span>egen das
            </div><div class="t m0 x1 h5 y68 ff1 fs2 fc0 sc0 ls5 ws4">
              Datengeheimnis <span class="_ _1a"> </span>kö<span class="_ _1"></span>nnen <span class="_ _1a"> </span>nach <span class="_ _1a"> </span>Artike<span class="_ _1"></span>l <span class="_ _1a"> </span>83
            </div><div class="t m0 x1 h5 ycc ff1 fs2 fc0 sc0 ls5 ws4">
              Datenschutz-Grundverordnung <span class="_ _1c"> </span>i.V.m. <span class="_ _2b"> </span>§§ <span class="_ _1c"> </span>41<span class="_ _1"></span>-43
            </div><div class="t m0 x1 h5 y6a ff1 fs2 fc0 sc0 ls5 ws4">
              Bundesdatenschutzgesetz <span class="_ _10"> </span>mit <span class="_ _10"> </span>Bußgeld, <span class="_ _15"> </span>Geld<span class="_ _1"></span>- <span class="_ _10"> </span>oder
            </div><div class="t m0 x1 h5 y6b ff1 fs2 fc0 sc0 ls5 ws4">
              Freiheitsstrafe <span class="_ _46"> </span>geahndet <span class="_ _46"> </span>w<span class="_ _11"></span>erd<span class="_ _1"></span>en. <span class="_ _46"> </span>Die
            </div><div class="t m0 x1 h5 y6c ff1 fs2 fc0 sc0 ls5 ws4">
              Verschwiegenheitsverpflichtung <span class="_ _1c"> </span>unter <span class="_ _d"> </span>Pu<span class="_ _1"></span>nkt <span class="_ _d"> </span>1<span class="_ _1"></span>1
            </div><div class="t m0 x1 h5 y6d ff1 fs2 fc0 sc0 ls5 ws4">
              Absatz <span class="_"> </span>1 <span class="_ _19"> </span>wird <span class="_ _19"> </span>durch <span class="_"> </span>diese <span class="_ _19"> </span>Verpflichtung <span class="_"> </span>a<span class="_ _1"></span>uf <span class="_"> </span>das
            </div><div class="t m0 x1 h5 y6e ff1 fs2 fc0 sc0 ls5 ws4">
              Datengeheimnis <span class="_ _16"></span>nicht <span class="_ _16"></span>berührt. <span class="_ _1"></span>Die <span class="_ _16"></span>Ve<span class="_ _1"></span>rpflichtung <span class="_ _1"></span>auf
            </div><div class="t m0 x1 h5 y6f ff1 fs2 fc0 sc0 ls5 ws4">
              das Datengeheimnis besteht auch n<span class="_ _1"></span>ach Beendigung
            </div><div class="t m0 x1 h5 y70 ff1 fs2 fc0 sc0 ls5 ws4">
              des Arbeitsverhältnisses fort.
            </div><div class="t m0 x1 h5 yee ff2 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y72 ff1 fs2 fc0 sc0 ls5 ws4">
              (2) <span class="_ _15"> </span>In <span class="_ _15"> </span>einem <span class="_ _15"> </span>gesonderten <span class="_ _15"> </span>Dokument <span class="_ _15"> </span>informiert <span class="_ _15"> </span>der
            </div><div class="t m0 x1 h5 y73 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitgeber <span class="_"> </span>d<span class="_ _11"></span>en<span class="_ _1"></span> <span class="_ _20"> </span>Mitarbeiter <span class="_ _4"> </span>über <span class="_"> </span>die <span class="_ _4"> </span>Verarbeitung
            </div><div class="t m0 x1 h5 y74 ff1 fs2 fc0 sc0 ls5 ws4">
              seiner <span class="_ _1"></span>personenbezogenen Daten <span class="_ _1"></span>und <span class="_ _1"></span>klärt <span class="_ _1"></span>ihn ü<span class="_ _1"></span>ber
            </div><div class="t m0 x1 h5 y75 ff1 fs2 fc0 sc0 ls5 ws4">
              seine Rechte und Pflichten auf.
            </div><div class="t m0 x1 h5 y76 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 yef ff2 fs2 fc0 sc0 ls2 ws4">
              <b>20 <span class="ls5">Einzelvertragliche Ausschlussfristen  </span></b>
            </div><div class="t m0 x1 h5 yce ff1 fs2 fc0 sc0 ls5 ws4">
              Es <span class="_ _27"> </span>finden <span class="_ _2c"> </span>ke<span class="_ _1"></span>ine <span class="_ _32"> </span>tariflichen <span class="_ _32"> </span>Ausschlussfristen <span class="_ _27"> </span>auf<span class="_ _0"></span>
            </div><div class="t m0 x1 h5 ycf ff1 fs2 fc0 sc0 ls5 ws4">
              dieses <span class="_ _32"> </span>Arbe<span class="_ _1"></span>itsverhältnis <span class="_ _32"> </span>Anwendung. <span class="_ _32"> </span>Stattdessen
            </div><div class="t m0 x1 h5 yf0 ff1 fs2 fc0 sc0 ls5 ws4">
              vereinbaren <span class="_ _1"></span>die <span class="_ _16"></span>Vertragsparteien <span class="_ _1"></span>die <span class="_ _16"></span>nachfolgenden
            </div><div class="t m0 x1 h5 yf1 ff1 fs2 fc0 sc0 ls5 ws4">
              einzelvertraglichen Ausschlussfristen.
            </div><div class="t m0 x1 h5 yf2 ff1 fs2 fc0 sc0 ls5 ws4">
              (1) Ausschluss von Ansprüchen des Mitarbeiters
            </div><div class="t m0 x1 h5 yd3 ff1 fs2 fc0 sc0 ls5 ws4">
              a. <span class="_ _31"> </span>Ansp<span class="_ _1"></span>rüche <span class="_ _31"> </span>des <span class="_ _31"> </span>Mitarbe<span class="_ _1"></span>iters <span class="_ _31"> </span>aus <span class="_ _31"> </span>dem
            </div><div class="t m0 x1 h5 yd4 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsverhältnis <span class="_ _f"></span>verfallen, <span class="_ _16"></span>wenn <span class="_ _f"></span>sie <span class="_ _f"></span>nicht <span class="_ _16"></span>innerhalb
            </div><div class="t m0 x1 h5 yd5 ff1 fs2 fc0 sc0 ls5 ws4">
              einer <span class="_ _e"> </span>Ausschlussfrist <span class="_ _d"> </span>von <span class="_ _1b"> </span>vier <span class="_ _e"> </span>Monaten <span class="_ _d"> </span>nach
            </div><div class="t m0 x1 h5 yd6 ff1 fs2 fc0 sc0 ls5 ws4">
              Fälligkeit <span class="_"> </span>gegenüber<span class="_ _0"></span> <span class="_"> </span>de<span class="_ _0"></span>m <span class="_"> </span>Ar<span class="_ _0"></span>beitgeber <span class="_"> </span>in <span class="_ _20"> </span>Tex<span class="_ _11"></span>tfo<span class="_ _1"></span>rm
            </div><div class="t m0 x1 h5 yd7 ff1 fs2 fc0 sc0 ls5 ws4">
              zumindest <span class="_ _2a"> </span>dem <span class="_ _2a"> </span>Grunde <span class="_ _2a"> </span>nach <span class="_ _2a"> </span>geltend <span class="_ _2a"> </span>gemacht
            </div><div class="t m0 x1 h5 yf3 ff1 fs2 fc0 sc0 ls5 ws4">
              werden.
            </div><div class="t m0 x6 h5 y45 ff1 fs2 fc0 sc0 ls5 ws4">
              Lehnt <span class="_ _f"></span>d<span class="_ _1"></span>er <span class="_ _f"></span>Arbeitgeber <span class="_ _f"></span>die <span class="_ _10"> </span>Ansprüche <span class="_ _f"></span>schr<span class="_ _1"></span>iftlich <span class="_ _10"> </span>ab,
            </div><div class="t m0 x6 h5 y46 ff1 fs2 fc0 sc0 ls5 ws4">
              verfallen <span class="_ _10"> </span>die <span class="_ _10"> </span>Ansprüche <span class="_ _15"> </span>des <span class="_ _f"></span>Mitarbeite<span class="_ _1"></span>rs, <span class="_ _10"> </span>wenn <span class="_ _10"> </span>sie
            </div><div class="t m0 x6 h5 y47 ff1 fs2 fc0 sc0 ls5 ws4">
              nicht <span class="_"> </span>innerhalb <span class="_"> </span>vo<span class="_ _0"></span>n <span class="_"> </span>einer <span class="_"> </span>w<span class="_ _11"></span>e<span class="_ _1"></span>iteren <span class="_"> </span>Ausschlussfrist<span class="_ _11"></span>
            </div><div class="t m0 x6 h5 y48 ff1 fs2 fc0 sc0 ls5 ws4">
              von <span class="_ _2a"> </span>vier <span class="_ _c"> </span>Monaten <span class="_ _2a"> </span>ab <span class="_ _2a"> </span>Zugang <span class="_ _2a"> </span>der <span class="_ _2a"> </span>schriftlichen
            </div><div class="t m0 x6 h5 y49 ff1 fs2 fc0 sc0 ls5 ws4">
              Ablehnung <span class="_ _f"></span>zumindest <span class="_ _f"></span>dem <span class="_ _f"></span>Grunde <span class="_ _f"></span>nach <span class="_ _f"></span>gerichtlich<span class="_ _0"></span>
            </div><div class="t m0 x6 h5 y4a ff1 fs2 fc0 sc0 ls5 ws4">
              geltend gemacht werden.
            </div><div class="t m0 x6 h5 yf4 ff1 fs2 fc0 sc0 ls5 ws4">
              b. <span class="_ _11"></span>Diese <span class="_ _45"></span>Ausschlussfrist<span class="_ _1"></span>en <span class="_ _45"></span>gelten <span class="_ _11"></span>nicht <span class="_ _45"></span>fü<span class="_ _1"></span>r <span class="_ _45"></span>Ansprüche
            </div><div class="t m0 x6 h5 yf5 ff1 fs2 fc0 sc0 ls5 ws4">
              des <span class="_ _24"> </span>Mitarbeiters, <span class="_ _2b"> </span>die <span class="_ _24"> </span>kraft <span class="_ _2b"> </span>Gesetzes <span class="_ _24"> </span>diesen
            </div><div class="t m0 x6 h5 yf6 ff1 fs2 fc0 sc0 ls5 ws4">
              Ausschlussfristen entzogen sind, beispielsweise
            </div><div class="t m0 x6 h5 yf7 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>Ans<span class="_ _1"></span>prüche <span class="_ _1"></span>aus <span class="_ _1"></span>einem<span class="_ _1"></span> <span class="_ _1"></span>nach <span class="_ _1"></span>dem <span class="_ _16"></span>Arbeitnehmer<span class="_ _1"></span>-
            </div><div class="t m0 x7 h5 yf8 ff1 fs2 fc0 sc0 ls5 ws4">
              Entsendegesetz <span class="_ _2f"> </span>für <span class="_ _47"> </span>allgemeinverbindlich
            </div><div class="t m0 x7 h5 yf9 ff1 fs2 fc0 sc0 ls5 ws4">
              erklärten <span class="_ _f"></span>Tarifvertrag <span class="_ _f"></span>und <span class="_ _f"></span>Ansprüche <span class="_ _f"></span>aus <span class="_ _f"></span>einer
            </div><div class="t m0 x7 h5 yfa ff1 fs2 fc0 sc0 ls5 ws4">
              Rechtsverordnung <span class="_ _26"> </span>nach <span class="_ _26"> </span>dem <span class="_ _26"> </span>Arbeitnehmer<span class="_ _1"></span>-
            </div><div class="t m0 x7 h5 yfb ff1 fs2 fc0 sc0 ls5 ws4">
              Entsendegesetz <span class="_ _16"></span>(wobei <span class="_ _f"></span>sich <span class="_ _f"></span>aus <span class="_ _f"></span>der <span class="_ _f"></span>jew<span class="_ _11"></span>ei<span class="_ _1"></span>ligen
            </div><div class="t m0 x7 h5 yfc ff1 fs2 fc0 sc0 ls5 ws4">
              Mindestlohnregelung Au<span class="_ _11"></span>s<span class="_ _1"></span>schlussfristen <span class="_ _11"></span>ergeben
            </div><div class="t m0 x7 h5 yfd ff1 fs2 fc0 sc0 ls5 ws4">
              können und diese dann einzuhalten sind),
            </div><div class="t m0 x6 h5 yfe ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>Ans<span class="_ _1"></span>prüche aus dem Mindestlohngesetz,
            </div><div class="t m0 x6 h5 yff ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>Ans<span class="_ _1"></span>prüche aus einer Betriebsv<span class="_ _0"></span>ereinbarung oder
            </div><div class="t m0 x6 h5 y100 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>Ans<span class="_ _1"></span>prüche <span class="_ _22"> </span>aus <span class="_ _22"> </span>einem <span class="_ _22"> </span>nach <span class="_ _22"> </span>dem
            </div><div class="t m0 x7 h5 y101 ff1 fs2 fc0 sc0 ls5 ws4">
              Tarifvertragsgesetz anwendbaren Tarifvertrag.
            </div><div class="t m0 x6 h5 y102 ff1 fs2 fc0 sc0 ls5 ws4">
              Diese Ausschlussfristen gelten außerdem nicht für
            </div><div class="t m0 x6 h5 y103 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>Ans<span class="_ _1"></span>prüche aus <span class="_ _1"></span>§ 8 Absatz 5 <span class="_ _1"></span>Arbeitnehmerüber<span class="_ _1"></span>-
            </div><div class="t m0 x7 h5 y104 ff1 fs2 fc0 sc0 ls5 ws4">
              lassungsgesetz i.V.m. einer Verordnung über
            </div><div class="t m0 x6 h5 y105 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>
            </div><div class="t m0 x6 h5 y106 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>
            </div><div class="t m0 x6 h5 y107 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>ei<span class="_ _1"></span>ne <span class="_ _c"> </span>Lohnuntergrenze <span class="_ _2a"> </span>in <span class="_ _c"> </span>der <span class="_ _2a"> </span>Arbeitnehmer-
            </div><div class="t m0 x7 h5 y108 ff1 fs2 fc0 sc0 ls5 ws4">
              überlassung,
            </div><div class="t m0 x6 h5 y109 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>Sch<span class="_ _1"></span>äden <span class="_ _10"> </span>aus <span class="_ _15"> </span>der <span class="_ _15"> </span>Verletzung <span class="_ _10"> </span>des<span class="_ _1"></span> <span class="_ _10"> </span>Lebens, <span class="_ _15"> </span>des
            </div><div class="t m0 x7 h5 y10a ff1 fs2 fc0 sc0 ls5 ws4">
              Körpers <span class="_ _2c"> </span>oder <span class="_ _2c"> </span>der <span class="_ _2c"> </span>Gesundheit, <span class="_ _2c"> </span>die <span class="_ _2c"> </span>auf <span class="_ _2c"> </span>ei<span class="_ _1"></span>ner
            </div><div class="t m0 x7 h5 y10b ff1 fs2 fc0 sc0 ls5 ws4">
              vorsätzlichen <span class="_ _11"></span>oder <span class="_ _11"></span>fahrlässigen <span class="_ _11"></span>Pflichtverletzung
            </div><div class="t m0 x7 h5 y10c ff1 fs2 fc0 sc0 ls5 ws4">
              des <span class="_ _f"></span>Arbeitgebers <span class="_ _16"></span>oder <span class="_ _f"></span>einer <span class="_ _f"></span>vorsätzlichen <span class="_ _16"></span>o<span class="_ _1"></span>der<span class="_ _0"></span>
            </div><div class="t m0 x7 h5 y10d ff1 fs2 fc0 sc0 ls5 ws4">
              fahrlässigen <span class="_ _48"> </span>Pflichtverletzung <span class="_ _48"> </span>eines
            </div><div class="t m0 x7 h5 y10e ff1 fs2 fc0 sc0 ls5 ws4">
              gesetzlichen <span class="_ _15"> </span>Vertreters <span class="_ _15"> </span>oder <span class="_ _10"> </span>Erfüll<span class="_ _1"></span>ungsgehilfen
            </div><div class="t m0 x7 h5 y10f ff1 fs2 fc0 sc0 ls5 ws4">
              des
            </div><div class="t m0 x7 h5 y110 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitgebers beruhen,
            </div><div class="t m0 x6 h5 y111 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>s<span class="_ _1"></span>onstige <span class="_ _4"> </span>Schäden, <span class="_ _4"> </span>die <span class="_ _20"> </span>auf <span class="_ _4"> </span>einer <span class="_ _20"> </span>vorsätzlichen<span class="_ _11"></span> <span class="_ _1"></span>
            </div><div class="t m0 x7 h5 y112 ff1 fs2 fc0 sc0 ls5 ws4">
              oder <span class="_ _27"> </span>grob <span class="_ _27"> </span>fahrlässigen <span class="_ _27"> </span>Pflichtverletzung <span class="_ _32"> </span>des
            </div><div class="t m0 x7 h5 y113 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitgebers <span class="_ _10"> </span>oder <span class="_ _10"> </span>auf <span class="_ _10"> </span>einer <span class="_ _10"> </span>vorsätzlichen <span class="_ _10"> </span>oder
            </div><div class="t m0 x7 h5 y114 ff1 fs2 fc0 sc0 ls5 ws4">
              grob <span class="_ _33"> </span>fahrlässigen <span class="_ _33"> </span>Pflichtverletzung <span class="_ _33"> </span>eines
            </div><div class="t m0 x7 h5 y115 ff1 fs2 fc0 sc0 ls5 ws4">
              gesetzlichen <span class="_ _15"> </span>Vertreters <span class="_ _15"> </span>oder <span class="_ _10"> </span>Erfüll<span class="_ _1"></span>ungsgehilfen
            </div><div class="t m0 x7 h5 y116 ff1 fs2 fc0 sc0 ls5 ws4">
              des Arbeitgebers beruhen oder
            </div><div class="t m0 x6 h5 y117 ff1 fs2 fc0 sc0 ls5 ws4">
              - <span class="_ _1a"> </span>Ans<span class="_ _1"></span>prüche <span class="_ _26"> </span>des <span class="_ _26"> </span>Mitarbeiters, <span class="_ _26"> </span>d<span class="_ _1"></span>ie <span class="_ _26"> </span>auf <span class="_ _26"> </span>einer
            </div><div class="t m0 x7 h5 y118 ff1 fs2 fc0 sc0 ls5 ws4">
              unerlaubten <span class="_ _19"> </span>Handlung <span class="_ _19"> </span>des <span class="_ _19"> </span>Arbeitgebers <span class="_ _19"> </span>oder
            </div><div class="t m0 x7 h5 y119 ff1 fs2 fc0 sc0 ls5 ws4">
              auf <span class="_ _31"> </span>einer <span class="_ _31"> </span>unerlaubten <span class="_ _33"> </span>Handlung <span class="_ _31"> </span>eines
            </div><div class="t m0 x7 h5 y11a ff1 fs2 fc0 sc0 ls5 ws4">
              gesetzlichen <span class="_ _15"> </span>Vertreters <span class="_ _10"> </span>oder <span class="_ _15"> </span>Erfüllungsgehilfen
            </div><div class="t m0 x7 h5 y11b ff1 fs2 fc0 sc0 ls5 ws4">
              des Arbeitgebers beruhen.
            </div><div class="t m0 x6 h5 y11c ff1 fs2 fc0 sc0 ls5 ws4">
              c. <span class="_ _20"> </span>Ansprüche <span class="_ _4"> </span>des <span class="_ _4"> </span>Mitarbeiters, <span class="_ _4"> </span>die <span class="_ _20"> </span>nicht <span class="_ _4"> </span>innerhalb
            </div><div class="t m0 x6 h5 y11d ff1 fs2 fc0 sc0 ls5 ws4">
              dieser <span class="_ _20"> </span>Ausschlussfristen <span class="_ _4"> </span>geltend <span class="_ _20"> </span>gemacht <span class="_ _20"> </span>werden,
            </div><div class="t m0 x6 h5 y11e ff1 fs2 fc0 sc0 ls5 ws4">
              sind ausgeschlossen.
            </div><div class="t m0 x6 h5 y11f ff1 fs2 fc0 sc0 ls5 ws4">
              (2) Ausschluss von Ansprüchen des Arbeitgebers
            </div><div class="t m0 x6 h5 y120 ff1 fs2 fc0 sc0 ls5 ws4">
              a. <span class="_ _33"> </span>Ansprüche <span class="_ _38"> </span>des <span class="_ _33"> </span>Arbeitgebers <span class="_ _33"> </span>aus <span class="_ _38"> </span>dem
            </div><div class="t m0 x6 h5 y121 ff1 fs2 fc0 sc0 ls5 ws4">
              Arbeitsverhältnis <span class="_ _f"></span>verfallen, <span class="_ _16"></span>wenn <span class="_ _f"></span>sie <span class="_ _f"></span>nicht <span class="_ _16"></span>innerha<span class="_ _1"></span>lb
            </div><div class="t m0 x6 h5 y122 ff1 fs2 fc0 sc0 ls5 ws4">
              einer <span class="_ _23"> </span>Ausschlussfrist <span class="_ _14"> </span>von <span class="_ _23"> </span>zwei <span class="_ _14"> </span>Monaten <span class="_ _23"> </span>nach
            </div><div class="t m0 x6 h5 y123 ff1 fs2 fc0 sc0 ls5 ws4">
              Fälligkeit <span class="_ _14"> </span>schriftlich <span class="_ _14"> </span>geg<span class="_ _1"></span>enüber <span class="_ _14"> </span>dem <span class="_ _14"> </span>Mitarbeiter
            </div><div class="t m0 x6 h5 y124 ff1 fs2 fc0 sc0 ls5 ws4">
              geltend gemacht werden.
            </div><div class="t m0 x6 h5 y125 ff1 fs2 fc0 sc0 ls5 ws4">
              Lehnt <span class="_ _1"></span>der <span class="_ _16"></span>Mitarbeiter <span class="_ _1"></span>d<span class="_ _1"></span>ie <span class="_ _1"></span>Ansprüche <span class="_ _1"></span>in <span class="_ _16"></span>Textform <span class="_ _1"></span>ab,
            </div><div class="t m0 x6 h5 y126 ff1 fs2 fc0 sc0 ls5 ws4">
              verfallen <span class="_ _16"></span>die <span class="_ _16"></span>Ansprüche <span class="_ _16"></span>des <span class="_ _16"></span>Arbeitgebers, <span class="_ _16"></span>wenn <span class="_ _16"></span>si<span class="_ _1"></span>e
            </div><div class="t m0 x6 h5 y127 ff1 fs2 fc0 sc0 ls5 ws4">
              nicht <span class="_"> </span>innerhalb <span class="_"> </span>vo<span class="_ _0"></span>n <span class="_"> </span>einer <span class="_"> </span>w<span class="_ _11"></span>e<span class="_ _1"></span>iteren <span class="_"> </span>Ausschlussfrist
            </div>
          </div>
        </div><div
          class="pi"
          data-data="{&quot;ctm&quot;:[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}"
        ></div>
      </div>
      <div
        id="pf6"
        class="pf w0 h0"
        data-page-no="6"
      >
        <div class="pc pc6 w0 h0">
          <div class="c x0 y1 w2 h0">
            <div class="t m0 x1 h2 y2 ff1 fs0 fc0 sc0 ls5 ws4">
              © iGZ
            </div><div class="t m0 x1 h2 y3 ff1 fs0 fc0 sc0 ls5 ws4">
              e.V., nach En<span class="_ _0"></span>tfernung von Log<span class="_ _0"></span>o / Copyrigh<span class="_ _11"></span>t<span class="_ _1"></span> frei zur eigenen <span class="_ _11"></span>Verwendung der iGZ-Mitglieder (S<span class="_ _0"></span>tand: <span class="ls6 ws0">17</span>.02.2020)
            </div>
          </div><div class="c x2 y4 w3 h3">
            <div class="t m0 x3 h2 y5 ff1 fs0 fc0 sc0 ls5 ws4">
              6
            </div>
          </div><div class="c x0 y1 w2 h0">
            <div class="t m0 x1 h5 y45 ff1 fs2 fc0 sc0 ls5 ws4">
              von <span class="_ _27"> </span>zwei <span class="_ _27"> </span>Monaten <span class="_ _27"> </span>ab <span class="_ _27"> </span>Zug<span class="_ _11"></span>a<span class="_ _1"></span>ng <span class="_ _27"> </span>der <span class="_ _32"> </span>in<span class="_ _1"></span> <span class="_ _27"> </span>Tex<span class="_ _11"></span>tform<span class="_ _1"></span> <span class="_ _1"></span>
            </div><div class="t m0 x1 h5 y46 ff1 fs2 fc0 sc0 ls5 ws4">
              erklärten <span class="_ _27"> </span>Ablehnung <span class="_ _27"> </span>gerichtlich <span class="_ _27"> </span>geltend <span class="_ _27"> </span>gemacht
            </div><div class="t m0 x1 h5 y47 ff1 fs2 fc0 sc0 ls5 ws4">
              werden.
            </div><div class="t m0 x1 h5 y128 ff1 fs2 fc0 sc0 ls5 ws4">
              b. <span class="_ _10"> </span>Ansprüche <span class="_ _f"> </span>d<span class="_ _1"></span>es <span class="_ _f"></span>Arbeitgebers, <span class="_ _10"> </span>die <span class="_ _f"> </span>n<span class="_ _1"></span>icht <span class="_ _f"></span>innerhalb
            </div><div class="t m0 x1 h5 y129 ff1 fs2 fc0 sc0 ls5 ws4">
              dieser <span class="_ _20"> </span>Ausschlussfristen <span class="_ _4"> </span>geltend <span class="_ _20"> </span>gemacht <span class="_ _20"> </span>werden,
            </div><div class="t m0 x1 h5 y12a ff1 fs2 fc0 sc0 ls5 ws4">
              sind ausgeschlossen.
            </div><div class="t m0 x1 h5 yf4 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 yf5 ff1 fs2 fc0 sc0 ls5 ws4">
              Köln, <span class="ls12 ws8"></span> {{ Sozlesme.imza_tarihi || '' }}
            </div><div class="t m0 x1 h5 yf6 ff1 fs2 fc0 sc0 ls8 ws4">
              ____________<span class="_ _11"></span>_________________<span class="_ _11"></span>_______
            </div><div class="t m0 x1 h5 y12b ff1 fs2 fc0 sc0 ls5 ws4">
              (Ort / Datum / Unterschrift des Arbeitgebers)
            </div><div class="t m0 x1 h5 y12c ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y12d ff1 fs2 fc0 sc0 ls5 ws4">
              Köln, <span class="ls12 ws8"></span> {{ Sozlesme.imza_tarihi || '' }}
            </div><div class="t m0 x1 h5 y12e ff1 fs2 fc0 sc0 ls8 ws4">
              ____________<span class="_ _11"></span>_________________<span class="_ _11"></span>_______
            </div><div class="t m0 x1 h5 y12f ff1 fs2 fc0 sc0 ls5 ws4">
              (Ort / Datum / Unterschrift des M<span class="_ _0"></span>itarbeiters<span class="_ _1"></span>)
            </div><div class="t m0 x1 h5 y130 ff1 fs2 fc0 sc0 ls5 ws4">
              Der M<span class="_ _11"></span>itarb<span class="_ _1"></span>eiter <span class="_ _11"></span>bestä<span class="_ _1"></span>tigt <span class="_ _11"></span>durch seine Unt<span class="_ _11"></span>ersch<span class="_ _1"></span>rift <span class="_ _11"></span>das
            </div><div class="t m0 x1 h5 y131 ff1 fs2 fc0 sc0 ls5 ws4">
              Merkblatt <span class="_ _22"> </span>für <span class="_ _21"> </span>Leiharbeitnehmerinnen <span class="_ _21"> </span>und
            </div><div class="t m0 x1 h5 y132 ff1 fs2 fc0 sc0 ls5 ws4">
              Leiharbeitnehmer <span class="_ _16"></span>de<span class="_ _1"></span>r <span class="_ _16"></span>Bundesagentur <span class="_ _16"></span>für <span class="_ _f"></span>Arbeit, <span class="_ _16"></span>ein
            </div><div class="t m0 x1 h5 y133 ff1 fs2 fc0 sc0 ls5 ws4">
              Exemplar <span class="_ _10"> </span>dieses <span class="_ _10"> </span>Arbeitsvertrages, <span class="_ _f"></span>eine <span class="_ _10"> </span>Information
            </div><div class="t m0 x1 h5 y134 ff1 fs2 fc0 sc0 ls5 ws4">
              über <span class="_"> </span>d<span class="_ _1"></span>ie <span class="_"> </span>Verarbeitung <span class="_ _19"> </span>seiner <span class="_ _19"> </span>personenbezogenen
            </div><div class="t m0 x1 h5 y135 ff1 fs2 fc0 sc0 ls5 ws4">
              Daten <span class="_ _12"> </span>und <span class="_ _1a"> </span>eine <span class="_ _12"> </span>Verp<span class="_ _1"></span>flichtung <span class="_ _12"> </span>auf <span class="_ _12"> </span>das
            </div><div class="t m0 x1 h5 y136 ff1 fs2 fc0 sc0 ls5 ws4">
              Datengeheimnis, s<span class="_ _1"></span>owie folgende <span class="_ _1"></span>weitere <span class="_ _1"></span>Unterlagen
            </div><div class="t m0 x1 h5 y137 ff1 fs2 fc0 sc0 ls5 ws4">
              erhalten zu haben:
            </div><div class="t m0 x1 h5 y138 ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y139 ff1 fs2 fc0 sc0 ls8 ws4">
              Köln, <span class="_ _c"> </span>{{ Sozlesme.imza_tarihi || '' }} <span class="_ _c"> </span>___________<span class="_ _11"></span>_____________<span class="_ _0"></span>______
            </div><div class="t m0 x1 h5 y13a ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y13b ff1 fs2 fc0 sc0 ls5 ws4">
              (Ort / Datum / Unterschrift des M<span class="_ _11"></span>i<span class="_ _1"></span>tarbeiters)
            </div><div class="t m0 x1 h5 y13c ff1 fs2 fc0 sc0 ls5 ws4">
            </div><div class="t m0 x1 h5 y13d ff1 fs2 fc0 sc0 ls5 ws4">
            </div>
          </div>
        </div><div
          class="pi"
          data-data="{&quot;ctm&quot;:[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SozlesmePrint',
  computed: {
    Sozlesme() {
      return this.$store.state.Sozlesmeler.Sozlesme
    },
  },
  mounted() {
    setTimeout(() => {
      window.print()
    }, 500)
  },
}

</script>

<style scoped>
  @import '../../assets/print.css';
  .checkboxdiv {
    display: inline-block;
    border: 1px solid #000000;
    width: 40px;
    height: 40px;
    line-height: 35px;
  }
  .bg-gray {
    background-color: #cccccc;
  }
</style>
