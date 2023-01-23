document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoredisplay = document.querySelector("#score");
  const result = document.querySelector(".gameresult");
  const play = document.querySelector(".play");

  let score = 0;
  const width = 28;

  const map = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  // 0=pac-dot
  // 1=wall
  // 2=ghost lair
  // 3-power-pellet
  // 4=empty

  const squares = [];

  function createBoard() {
    for (let i = 0; i < map.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);
      // add layout to the createBoarder
      if (map[i] === 0) {
        squares[i].classList.add("pac_dot");
      } else if (map[i] === 1) {
        squares[i].classList.add("wall");
      } else if (map[i] === 2) {
        squares[i].classList.add("ghost_lair");
      } else if (map[i] === 3) {
        squares[i].classList.add("power_pellet");
      }
    }
  }
  createBoard();

  let packmencurrentindex = 490;
  squares[packmencurrentindex].classList.add("pac_man");
  // move packman
  function movepackman(e) {
    squares[packmencurrentindex].classList.remove("pac_man");

    switch (e.keyCode) {
      case 37:
        if (
          packmencurrentindex % width !== 0 &&
          !squares[packmencurrentindex - 1].classList.contains("wall") &&
          !squares[packmencurrentindex - 1].classList.contains("ghost_lair")
        )
          packmencurrentindex -= 1;
        if (packmencurrentindex - 1 === 363) {
          packmencurrentindex = 391;
          squares[364].classList.remove("pac_man");
        }

        break;
      case 38:
        if (
          packmencurrentindex - width >= 0 &&
          !squares[packmencurrentindex - width].classList.contains("wall") &&
          !squares[packmencurrentindex - width].classList.contains("ghost_lair")
        )
          packmencurrentindex -= width;
        break;
      case 39:
        if (
          packmencurrentindex % width < width - 1 &&
          !squares[packmencurrentindex + 1].classList.contains("wall") &&
          !squares[packmencurrentindex + 1].classList.contains("ghost_lair")
        )
          packmencurrentindex += 1;
        if (packmencurrentindex + 1 === 392) {
          packmencurrentindex = 364;
          squares[391].classList.remove("pac_man");
        }
        break;
      case 40:
        if (
          packmencurrentindex + width < width * width &&
          !squares[packmencurrentindex + width].classList.contains("wall") &&
          !squares[packmencurrentindex + width].classList.contains("ghost_lair")
        )
          packmencurrentindex += width;

        break;
    }
    squares[packmencurrentindex].classList.add("pac_man");
    pacmaneaten();
    powerpelleteaten();
    checkforwin();
  }
  document.addEventListener("keyup", movepackman);

  // packman eat
  function pacmaneaten() {
    if (squares[packmencurrentindex].classList.contains("pac_dot")) {
      score++;
      scoredisplay.innerHTML = score;
      squares[packmencurrentindex].classList.remove("pac_dot");
    }
  }
  //   creating ghost

  class Ghost {
    constructor(className, startindex, speed) {
      this.className = className;
      this.startindex = startindex;
      this.speed = speed;
      this.currentIndex = startindex;
      this.timerId = NaN;
      this.isScare = false;
    }
  }
  const ghosts = [
    new Ghost("first", 348, 250),
    new Ghost("second", 376, 400),
    new Ghost("third", 351, 300),
    new Ghost("forth", 379, 500),
  ];

  ghosts.forEach((g) => {
    squares[g.currentIndex].classList.add(g.className);
    squares[g.currentIndex].classList.add("ghost");
  });

  //    move ghost randomly
  ghosts.forEach((ghost) => moveghost(ghost));

  function moveghost(ghost) {
    const directions = [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId = setInterval(function () {
      if (
        !squares[ghost.currentIndex + direction].classList.contains("wall") &&
        !squares[ghost.currentIndex + direction].classList.contains("ghost")
      ) {
        squares[ghost.currentIndex].classList.remove(
          ghost.className,
          "ghost",
          "scared_ghost"
        );

        ghost.currentIndex += direction;

        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
      } else {
        direction = directions[Math.floor(Math.random() * directions.length)];
        if (ghost.isScare) {
          squares[ghost.currentIndex].classList.add("scared_ghost");
        }

        if (
          ghost.isScare &&
          squares[ghost.currentIndex].classList.contains("pac_man")
        ) {
          squares[ghost.currentIndex].classList.remove(
            ghost.className,
            "ghost",
            "scared_ghost"
          );
          score += 100;
          squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
        }
      }
      gameover();
    }, ghost.speed);
  }

  // power_pellet eaten
  function powerpelleteaten() {
    if (squares[packmencurrentindex].classList.contains("power_pellet")) {
      score += 10;
      ghosts.forEach((ghost) => (ghost.isScare = true));
      setTimeout(onScareGhost, 10000);
      squares[packmencurrentindex].classList.remove("power_pellet");
    }
  }
  function onScareGhost() {
    ghosts.forEach((ghost) => (ghost.isScare = false));
  }

  // check game over
  function gameover() {
    if (
      squares[packmencurrentindex].classList.contains("ghost") &&
      !squares[packmencurrentindex].classList.contains("scared_ghost")
    ) {
      ghosts.forEach((g) => clearInterval(g.timerId));
      document.removeEventListener("keyup", movepackman);
      setTimeout(function () {
        result.innerHTML = "Game Over!";
        play.innerHTML = "Try again!";
      }, 500);
    }
  }

  function checkforwin() {
    if (score === 274) {
      ghosts.forEach((g) => clearInterval(g.timerId));
      document.removeEventListener("keyup", movepackman);
      result.innerHTML = "you won!";
      play.innerHTML = "Play again!";
    }
  }
});
