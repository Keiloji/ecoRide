<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AdminSpaceController extends AbstractController
{
    #[Route('/AdminSpace')]
    public function adminSpace(): Response
    {
        return new Response("Bienvenue sur votre page espace administrateur!");
    }
}
