const fetch = require('node-fetch');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Metode tidak diizinkan' });

  const { url } = req.body;

  if (!url || !url.match(/tiktok\.com\/|vt\.tiktok\.com\//i)) {
    return res.status(400).json({ success: false, message: '❌ Link tidak valid!' });
  }

  try {
    const apiRes = await fetch(`https://api.ownblox.biz.id/api/ttdl?url=${encodeURIComponent(url)}`);
    const json = await apiRes.json();

    if (json.status !== 200 || !json.download_links?.length) {
      return res.status(500).json({ success: false, message: '⚠️ Gagal mendapatkan video TikTok.' });
    }

    const videoUrl = json.download_links[0].url;
    return res.status(200).json({ success: true, videoUrl });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: '😢 Terjadi kesalahan saat mengunduh video.' });
  }
}