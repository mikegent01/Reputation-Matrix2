const FLEET_DATA = {
    ports: [
        { id: 'diamond_city', name: 'Diamond City', x: 100, y: 80 },
        { id: 'rogues_landing', name: "Rogue's Landing", x: 450, y: 50 },
        { id: 'scrap_heap', name: 'The Scrap Heap', x: 500, y: 300 },
        { id: 'mushroom_coast', name: 'Mushroom Coast', x: 80, y: 320 },
        { id: 'sky_casino', name: 'Sky Casino', x: 280, y: 180 },
    ],
    routes: [
        { from: 'diamond_city', to: 'rogues_landing', status: 'risky', contraband: 'Stolen Wario Land Artifacts' },
        { from: 'diamond_city', to: 'sky_casino', status: 'safe', contraband: 'Luxury Goods, "Investors"' },
        { from: 'sky_casino', to: 'scrap_heap', status: 'dangerous', contraband: 'Illegal Magitek Components' },
        { from: 'rogues_landing', to: 'scrap_heap', status: 'risky', contraband: 'Weaponry, Ratchet Raider Tech' },
        { from: 'mushroom_coast', to: 'sky_casino', status: 'safe', contraband: 'Exotic Fungi, "Medical" Supplies' },
        { from: 'mushroom_coast', to: 'diamond_city', status: 'dangerous', contraband: 'Untaxed Goods, Black Market Info' },
    ]
};

export function renderCrimsonFleetSystem() {
    return `
        <div class="system-content crimson-fleet-system">
            <p class="system-description">The Crimson Fleet operates a complex network of smuggling routes known as the "Sky-Trader's Web." Hover over routes and ports for intel.</p>
            <div class="sky-trader-web">
                <svg id="sky-trader-svg"></svg>
                <div class="sky-trader-web-tooltip"></div>
            </div>
        </div>
    `;
}

export function initCrimsonFleetSystem() {
    const svg = d3.select("#sky-trader-svg");
    const tooltip = d3.select(".sky-trader-web-tooltip");
    if (svg.empty() || tooltip.empty()) return;

    // Routes
    svg.append("g").selectAll("path")
        .data(FLEET_DATA.routes)
        .join("path")
        .attr("class", d => `route ${d.status}`)
        .attr("id", (d, i) => `route-path-${i}`)
        .attr("d", d => {
            const fromPort = FLEET_DATA.ports.find(p => p.id === d.from);
            const toPort = FLEET_DATA.ports.find(p => p.id === d.to);
            return `M${fromPort.x},${fromPort.y} C${(fromPort.x + toPort.x) / 2},${(fromPort.y + toPort.y) / 2 - 50}, ${(fromPort.x + toPort.x) / 2},${(fromPort.y + toPort.y) / 2 + 50}, ${toPort.x},${toPort.y}`;
        })
        .attr("fill", "none")
        .on("mouseover", (event, d) => {
            tooltip.style("display", "block")
                   .html(`<h6>Route Intel</h6><p><strong>Contraband:</strong> ${d.contraband}</p><p><strong>Status:</strong> <span class="${d.status}">${d.status.toUpperCase()}</span></p>`);
        })
        .on("mousemove", (event) => {
            tooltip.style("left", (event.layerX + 15) + "px")
                   .style("top", (event.layerY) + "px");
        })
        .on("mouseout", () => {
            tooltip.style("display", "none");
        });
    
    // Ships on routes
     svg.append("g").selectAll("circle")
        .data(FLEET_DATA.routes)
        .join("circle")
        .attr("r", 4)
        .attr("class", "ship")
        .append("animateMotion")
        .attr("dur", (d, i) => `${8 + i * 2}s`)
        .attr("repeatCount", "indefinite")
        .append("mpath")
        .attr("xlink:href", (d, i) => `#route-path-${i}`);


    // Ports
    const ports = svg.append("g").selectAll("g")
        .data(FLEET_DATA.ports)
        .join("g")
        .attr("class", "port")
        .attr("transform", d => `translate(${d.x}, ${d.y})`)
        .on("mouseover", (event, d) => {
            tooltip.style("display", "block")
                   .html(`<h6>Port: ${d.name}</h6>`);
        })
        .on("mousemove", (event) => {
            tooltip.style("left", (event.layerX + 15) + "px")
                   .style("top", (event.layerY) + "px");
        })
        .on("mouseout", () => {
            tooltip.style("display", "none");
        });

    ports.append("circle").attr("r", 6).attr("class", "port-circle");
    ports.append("text").text(d => d.name).attr("dy", -10).attr("class", "port-label");
}