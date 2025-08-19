/*
** Binary Heap implementation in Javascript
** From: http://eloquentjavascript.net/1st_edition/appendix2.html
**
** Copyright (c) 2007 Marijn Haverbeke, last modified on November 28 2013.
**
** Licensed under a Creative Commons attribution-noncommercial license. 
** All code in this book may also be considered licensed under an MIT license.
*/
function BinaryHeap(t){this.content=[],this.scoreFunction=t}BinaryHeap.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],n=this.content.pop();return this.content.length>0&&(this.content[0]=n,this.sinkDown(0)),t},remove:function(t){for(var n=this.content.length,i=0;i<n;i++)if(this.content[i]==t){var o=this.content.pop();if(i==n-1)break;this.content[i]=o,this.bubbleUp(i),this.sinkDown(i);break}},size:function(){return this.content.length},bubbleUp:function(t){for(var n=this.content[t],i=this.scoreFunction(n);t>0;){var o=Math.floor((t+1)/2)-1,e=this.content[o];if(i>=this.scoreFunction(e))break;this.content[o]=n,this.content[t]=e,t=o}},sinkDown:function(t){for(var n=this.content.length,i=this.content[t],o=this.scoreFunction(i);;){var e=2*(t+1),s=e-1,c=null;if(s<n){var h=this.content[s],r=this.scoreFunction(h);r<o&&(c=s)}if(e<n){var u=this.content[e];this.scoreFunction(u)<(null==c?o:r)&&(c=e)}if(null==c)break;this.content[t]=this.content[c],this.content[c]=i,t=c}}};