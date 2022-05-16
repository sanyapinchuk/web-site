<?php
$df = fopen("file.txt", 'w');
fprintf($df, chr(0xEF).chr(0xBB).chr(0xBF));
fclose($df);