<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./css/input.css" />
  <link rel="shortcut icon" href="./icons/free-icon-vr-glasses-2161752.png" type="image/x-icon" />
  <script src="https://cdn.tailwindcss.com"></script>
  <title>VR center</title>
</head>

<body class="bg-slate-900">
  <div class="flex flex-col w-full px-8">
    <a href="index.php" class="text-base text-gray-300 font-bold mt-4">
      <div class="flex flex-row w-full">
        <svg class="w-[24px] h-[24px] mr-2" fill="#d1d5db" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M74.656,56.818c3.895,3.729,5.788,8.795,5.788,15.491c0,1.104,0.896,2,2,2s2-0.885,2-1.989 c0-7.736-2.362-13.91-7.022-18.369C66.646,43.639,46.325,44.551,30,45.269c-2.28,0.101-4.461,0.211-6.499,0.28L38.428,30.62 c0.781-0.781,0.781-2.047,0-2.828s-2.048-0.781-2.828,0L17.479,45.915c-0.375,0.375-0.586,0.884-0.586,1.414 s0.211,1.039,0.586,1.414l18.123,18.12c0.391,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.415-0.586 c0.781-0.781,0.781-2.048,0-2.828L24.142,49.75c1.915-0.11,3.932-0.261,6.033-0.354C44.919,48.748,65.114,47.688,74.656,56.818z"></path> </g> </g></svg>
        <div>Назад</div> 
      </div>
    </a>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "games";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM games where id=".$_GET["gameId"].";";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo 
            '<div class="flex flex-col lg:flex-row w-full gap-12 mt-4 mb-12">
              <div class="flex w-full">
                <img src="./img/games/',$row["image"], '" alt="" class="object-fit" />
              </div>
              <div class="flex w-full flex-col px-6">
                <div class="text-2xl text-gray-300 font-bold mb-6">',$row["name"] ,'</div>
                <div class="text-base text-gray-300 font-bold mb-4">',$row["desc"] ,'</div>
                <div class="text-base text-gray-300 mb-2">Режим игры: ',$row["mode"] ,'</div>
                <div class="text-base text-gray-300 mb-2">Количество игроков: ',$row["players"] ,'</div>
                <div class="text-base text-gray-300 mb-2">Возрастное ограничение: ',$row["restriction"] ,'</div>
                <div class="text-base text-gray-300">Продолжительность: ',$row["duration"] ,' мин.</div>
              </div>
            </div>';
      }
} else {
  echo "0 results";
}

$conn->close();
?>

</div>
  <?php include 'partials/footer.php'; ?>
  <script src="script.js"></script>
</body>

</html>