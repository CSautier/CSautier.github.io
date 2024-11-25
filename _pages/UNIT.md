---
layout: page
permalink: /unit/
title: "UNIT: Unsupervised Online Instance Segmentation through Time"
navtitle: UNIT
nav: true
nav_order: 5
description: 
img: assets/img/12.jpg
importance: 1
category: work
related_publications: false
---

<style>
        .container {
            max-width: 1000px;
        }
</style>
<div class="links">
    <div class="publication-links">
        <span class="link-block"> 
            <a href="https://arxiv.org/abs/2409.07887" class="external-link button is-normal is-rounded is-dark" style="margin-top:5px;margin-right:10px"> 
                <span class="icon"> <i class="ai ai-arxiv"></i> </span> 
                <span>arXiv</span> 
            </a> 
        </span>
        <!-- <span class="link-block"> 
            <a href="TODO" class="external-link button is-normal is-rounded is-dark" style="margin-top:5px;margin-right:10px"> 
                <span class="icon"> 
                    <i class="fab fa-youtube"></i>
                </span> 
                <span>Video</span> 
            </a> 
        </span>  -->
        <span class="link-block"> 
            <a href="https://github.com/valeoai/UNIT" class="external-link button is-normal is-rounded is-dark" style="margin-top:5px"> 
                <span class="icon"> 
                    <i class="fab fa-github"></i>
                </span> 
                <span>Code</span> 
            </a>
        </span>
    </div>
</div>

## Abstract

Online object segmentation and tracking in Lidar point clouds enables autonomous agents to understand their surroundings and make safe decisions. Unfortunately, manual annotations for these tasks are prohibitively costly. We tackle this problem with the task of class-agnostic unsupervised online instance segmentation and tracking.
To that end, we leverage an instance segmentation backbone and propose a new training recipe that enables the online tracking of objects. Our network is trained on pseudo-labels, eliminating the need for manual annotations. We conduct an evaluation using metrics adapted for temporal instance segmentation. Computing these metrics requires temporally-consistent instance labels. When unavailable, we construct these labels using the available 3D bounding boxes and semantic labels in the dataset. We compare our method against strong baselines and demonstrate its superiority across two different outdoor Lidar datasets.

<div class="row">
    <div class="col-sm mt-3 mt-md-0" style="padding-right: 5px;padding-left: 5px;">
        {% include figure.liquid loading="eager" path="assets/img/projects/UNIT/SEGTARL.jpg" class="img-fluid zoomable-image rounded z-depth-1" %}
        <div class="caption">
            TARL segments [1]
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0" style="padding-right: 5px;padding-left: 5px;">
        {% include figure.liquid loading="eager" path="assets/img/projects/UNIT/Seg4D.jpg" class="img-fluid zoomable-image rounded z-depth-1" %}
        <div class="caption">
            4D-Seg (Ours)
        </div>
    </div>    <div class="col-sm mt-3 mt-md-0" style="padding-right: 5px;padding-left: 5px;">
        {% include figure.liquid loading="eager" path="assets/img/projects/UNIT/UNIT.jpg" class="img-fluid zoomable-image rounded z-depth-1" %}
        <div class="caption">
            UNIT (Ours)
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0" style="padding-right: 5px;padding-left: 5px;">
        {% include figure.liquid loading="eager" path="assets/img/projects/UNIT/GT.jpg" class="img-fluid zoomable-image rounded z-depth-1" %}
        <div class="caption">
            Ground truth
        </div>
    </div>
</div>

We generate pseudo-labels of instances across time in Lidar scans (4D-Seg), which we use to train an online segmenter (UNIT) that assigns to each 3D point an instance ID consistent over time. We show aggregations of scans over time. This sample scene if from SemanticKITTI, and the car in the foreground is static. The first two images show two prior baselines for this task. Image 3 is shows our input pseudo-labels. The fourth image renders an aggregation of UNIT on successive scans (our input is not an aggregated scan). Note that we obtain more labels than in the ground truth as our class-agnostic segmentation include all objects and stuff, such as trees or buildings.


<div class="rendering">
    <iframe src="/assets/potree/rendering.html?data-path=./pointclouds/rendering/cloud.json" width="100%" height=500px frameborder="0"></iframe>
    <div class="caption">
        Instance segmentation of UNIT on aggregated frames, validation set of SemanticKITTI. Moving objects appear elongated in world coordinates aggregated scans.
    </div>
</div>

<object type="image/svg+xml" data="/assets/img/projects/UNIT/method_overview_nolatex.svg" width="100%">
<iframe src="/assets/img/projects/UNIT/method_overview_nolatex.svg" width="100%" frameborder="0"></iframe>
    Your browser does not support SVG
</object>
<div class="caption">
    Method overview. Given unlabeled Lidar scans, we create offline pseudo-labels by spatio-temporal clustering (preprocessing). We then use these pseudo-labels to train an auto-regressive network. At inference, we apply this network to successive scans as they come.
</div>

<style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        table th, table td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
            padding: 0 0.2em 0 0.2em;
        }
        th {
            background-color: #f2f2f2;
        }
        .table-dark th{
            background-color: #252525
        } 
        .online-column {
            width: 50px; /* Set the desired width */
            border-left: none;
            border-right: none;
            font-size: 20px;
        }
        .checkmark {
            color: green;
        }
        .crossmark {
            color: red;
        }
        .highlightrow {
            background-color: #e6e6ff;
        }
        .table-dark .highlightrow{
            background-color: #1c1c30
        }
        mjx-container[display="true"] {
            margin: .5em 0 ! important
        }
</style>
<table>
    <thead>
        <tr>
            <th rowspan="2">Semantic KITTI</th>
            <th class="online-column" rowspan="2">Online</th>
            <th colspan="3">Unfiltered</th>
            <th colspan="2">Filtered</th>
        </tr>
        <tr>
            <th>$$\mathrm{S_{assoc}^{temp}}$$</th>
            <th>$$\mathrm{IoU^*}$$</th>
            <th>$$\mathrm{S_{assoc}}$$</th>
            <th>$$\mathrm{S_{assoc}^{temp}}$$</th>
            <th>$$\mathrm{S_{assoc}}$$</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>3DUIS w/o time [2]</td>
            <td class="online-column checkmark">✔</td>
            <td>-</td>
            <td>-</td>
            <td>0.550</td>
            <td>-</td>
            <td>0.768</td>
        </tr>
        <tr class="highlightrow">
            <td>UNIT w/o time</td>
            <td class="online-column checkmark">✔</td>
            <td>-</td>
            <td>-</td>
            <td><strong>0.715</strong></td>
            <td>-</td>
            <td><strong>0.811</strong></td>
        </tr>
        <tr>
            <td>3DUIS++</td>
            <td class="online-column checkmark">✔</td>
            <td>0.116</td>
            <td>0.214</td>
            <td>0.550</td>
            <td>0.148</td>
            <td>0.769</td>
        </tr>
        <tr>
            <td>TARL-Seg [1]</td>
            <td class="online-column crossmark">✘</td>
            <td>0.231</td>
            <td>0.353</td>
            <td>0.668</td>
            <td>0.264</td>
            <td>0.735</td>
        </tr>
        <tr>
            <td>TARL-Seg++</td>
            <td class="online-column checkmark">✔</td>
            <td>0.317</td>
            <td>0.446</td>
            <td>0.617</td>
            <td>0.370</td>
            <td>0.678</td>
        </tr>
        <tr>
            <td>4D-Seg</td>
            <td class="online-column crossmark">✘</td>
            <td>0.421</td>
            <td>0.529</td>
            <td>0.667</td>
            <td>0.486</td>
            <td>0.784</td>
        </tr>
        <tr>
            <td>4D-Seg++</td>
            <td class="online-column checkmark">✔</td>
            <td>0.447</td>
            <td>0.513</td>
            <td>0.647</td>
            <td>0.512</td>
            <td>0.762</td>
        </tr>
        <tr class="highlightrow">
            <td>UNIT</td>
            <td class="online-column checkmark">✔</td>
            <td><strong>0.482</strong></td>
            <td><strong>0.568</strong></td>
            <td>0.696</td>
            <td><strong>0.563</strong></td>
            <td>0.790</td>
        </tr>
    </tbody>
</table>
<div class="caption" style="padding-top: 1em">
    Results on SemanticKITTI. All scores are computed on the validation set of SemanticKITTI. The "filtered" scores are computed on segments of more than 50 points for any given scan as reported by prior art. Information about the metrics, and more datasets are available in the paper.
</div>


{% raw %}

```bibtex
@inproceedings{sautier2025unit,
  title = {{UNIT}: Unsupervised Online Instance Segmentation through Time},
  author = {Corentin Sautier and Gilles Puy and Alexandre Boulch and Renaud Marlet and Vincent Lepetit},
  booktitle={3DV},
  year = {2025}
}
```
{% endraw %}

## Sources

{% raw %}
[1] Nunes et al. "Temporal consistent 3D lidar representation learning for semantic perception in autonomous driving." <i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition.</i> 2023.

[2] Nunes et al. "Unsupervised Class-Agnostic Instance Segmentation of 3D LiDAR Data for Autonomous Vehicles." <i>IEEE Robotics and Automation Letters (RA-L).</i> 2022.

{% endraw %}
