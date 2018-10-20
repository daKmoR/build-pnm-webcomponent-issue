const fs = require('fs');

['shimmed-feature-a.html', 'shimmed-feature-b.html', 'shimmed-feature-a-and-b.html'].forEach((fileName) => {
  const content = fs.readFileSync(fileName, 'utf8');
  const pnm = fs.readFileSync('package-name-maps.json', 'utf8');

  const pnmInsert = `<!-- build-pnm-start -->
<script type="packagemap-shim">
${pnm}
</script>
<!-- build-pnm-end -->`;

  const updated = content.replace(/<!-- build-pnm-start -->(.|\n)*<!-- build-pnm-end -->/, pnmInsert);

  fs.writeFileSync(fileName, updated);
});
