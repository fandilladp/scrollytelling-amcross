
export default function layerMap(map, data) {
  let chapters = {
    world : {
      center: { lon: 0.00000, lat: 0.00000 },
      zoom: 1.00,
      pitch: 0.00,
      bearing: 0.00
    },
    lampung: {
      center: { lon: 104.79504, lat: -5.45454 },
      zoom: 9.28,
      pitch: 0.0,
      bearing: -16.0,
      speed: 0.5,
    },
    tanggamus: {
      center: { lon: 104.79068, lat: -5.61578 },
      zoom: 9.91,
      pitch: 60.0,
      bearing: -27.72,
      speed: 0.5,
    },
    resikoBanjirTanggamus: {
      center: { lon: 104.62852, lat: -5.53842 },
      zoom: 9.9,
      pitch: 0.0,
      bearing: -50.92,
      speed: 0.5,
    },
    desaTanggamus: {
      center: { lon: 104.4957, lat: -5.50425 },
      zoom: 11.87,
      pitch: 60.0,
      bearing: 101.08,
      speed: 0.5,
    },
    ntt: {
      center: { lon: 120.53556, lat: -8.71461 },
      zoom: 8.98,
      pitch: 0.0,
      bearing: 0.0,
      speed: 0.5,
    },
    manggarai: {
      center: { lon: 120.37067, lat: -8.61608 },
      zoom: 10.27,
      pitch: 60.0,
      bearing: -91.2,
      speed: 0.5,
    },
    resikoBanjirManggarai: {
      center: { lon: 120.3929, lat: -8.66619 },
      zoom: 10.59,
      pitch: 0.0,
      bearing: -96.0,
      speed: 0.5,
    },
    daerahManggarai: {
      center: { lon: 120.50754, lat: -8.32941 },
      zoom: 11.48,
      pitch: 56.5,
      bearing: -44.0,
      speed: 0.5,
    },
  };
  console.log(map);
  if(map){
    if (data === 1) {
      map.flyTo(chapters["lampung"]);
      map.setLayoutProperty("resikoBanjirTanggamus", "visibility", "none");
      map.setLayoutProperty("desa-tanggamus-1-1jw5rx", "visibility", "none");
    }
    else if (data === 2) {
      map.flyTo(chapters["tanggamus"]);
      map.setLayoutProperty("resikoBanjirTanggamus", "visibility", "none");
      map.setLayoutProperty("desa-tanggamus-1-1jw5rx", "visibility", "none");
    }
    else if (data === 3) {
      map.flyTo(chapters["resikoBanjirTanggamus"]);
      map.setLayoutProperty("resikoBanjirTanggamus", "visibility", "visible");
      map.setLayoutProperty("desa-tanggamus-1-1jw5rx", "visibility", "none");
    }
    else if (data === 4) {
      map.flyTo(chapters["desaTanggamus"]);
      map.setLayoutProperty("resikoBanjirTanggamus", "visibility", "visible");
      map.setLayoutProperty("desa-tanggamus-1-1jw5rx", "visibility", "visible");
    }
    else if (data === 5) {
      map.flyTo(chapters["ntt"]);
      map.setLayoutProperty("manggarai-kab-6ayun1", "visibility", "visible");
      map.setLayoutProperty(
        "manggarai-risikobanjir-583vxu",
        "visibility",
        "none"
      );
      map.setLayoutProperty("manggarai-penduduk-1b90uw", "visibility", "none");
    }
    else if (data === 6) {
      map.flyTo(chapters["manggarai"]);
      map.setLayoutProperty("manggarai-kab-6ayun1", "visibility", "visible");
      map.setLayoutProperty(
        "manggarai-risikobanjir-583vxu",
        "visibility",
        "none"
      );
      map.setLayoutProperty("manggarai-penduduk-1b90uw", "visibility", "none");
    }
    else if (data === 7) {
      map.flyTo(chapters["resikoBanjirManggarai"]);
      map.setLayoutProperty("manggarai-kab-6ayun1", "visibility", "visible");
      map.setLayoutProperty(
        "manggarai-risikobanjir-583vxu",
        "visibility",
        "visible"
      );
      map.setLayoutProperty("manggarai-penduduk-1b90uw", "visibility", "none");
    }
    else if (data === 8) {
      map.flyTo(chapters["daerahManggarai"]);
      map.setLayoutProperty("manggarai-kab-6ayun1", "visibility", "visible");
      map.setLayoutProperty(
        "manggarai-risikobanjir-583vxu",
        "visibility",
        "visible"
      );
      map.setLayoutProperty(
        "manggarai-penduduk-1b90uw",
        "visibility",
        "visible"
      );
    }
  }
}
