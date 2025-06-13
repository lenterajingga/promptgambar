document.getElementById('promptForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const subject = document.getElementById('subject').value.trim();
  const style = document.getElementById('style').value.trim();
  const setting = document.getElementById('setting').value.trim();
  const details = document.getElementById('details').value.trim();

  let prompt = `Buat gambar tentang ${subject}`;

  if (style) prompt += ` dengan gaya ${style}`;
  if (setting) prompt += `, berlatar di ${setting}`;
  if (details) prompt += `. Tambahkan detail seperti ${details}`;

  prompt += `. Buat gambar ini penuh warna dan mendetail.`;

  document.getElementById('outputPrompt').innerText = prompt;
});
