<div class="container-fluid mt-4">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar shadow-sm">
            <div class="p-3">
                <h6>Autenticado via OAuth</h6>
                <div id="user-profile"></div>
            </div>
        </nav>

        <main class="col-md-10">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Estratégia TI Verde - Equilibrium Dashboard</h1>
            </div>

            <div class="card mb-4">
                <div class="card-header bg-success text-white">Rastreabilidade de Resíduos Eletrônicos (Blockchain Ledger)</div>
                <div class="card-body">
                    <div id="map" style="height: 400px;"></div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <canvas id="emissionChart"></canvas>
                </div>
                <div class="col-md-6">
                    <div class="alert alert-info">
                        <strong>Insight de Negócio:</strong> 
                        Otimização de hardware reduziu o custo marginal em 12% conforme modelo matricial.
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>

<script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_KEY&callback=initMap"></script>
<script>
    function initMap() {
        // Integração híbrida: Google Maps para rotas, Leaflet para camadas ESG
        const map = L.map('map').setView([-23.5, -46.6], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }
</script>